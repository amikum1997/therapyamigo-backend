import { INext, IRequest, IResponse } from "../interface/vendors";
import BaseError from "../error/baseError";
import bcrypt from 'bcryptjs';
import User from "../models/user";
import { GeneralError } from "../error/errorConstants";
import Counselor from "../models/counselor";
import { AuthService, passwordGenerator } from "../services/authService/authService";


const AdminController = {
    createNewCounselor: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            let { firstName, middleName, lastName, counselorEmail, counselorPhoneNumber, counselorPhoneCountryCode, country, state, city, address } = req.body;
            // FORMAT STRUCTURE TO CREATE A NEW USER WITH ROLE COUNSELOR

            let counselorPassword = passwordGenerator(12)
            const salt = await bcrypt.genSalt(10);
            let newcounselorPassword = await bcrypt.hash(counselorPassword, salt);
            let toSave = {
                userName: `${firstName.toLowerCase()} ${middleName.toLowerCase()} ${lastName.toLowerCase()}`,
                userEmail: counselorEmail.toLowerCase(),
                userRole: "COUNSELOR",
                regRefrence: "THERAPY-AMIGO",
                countryCode: counselorPhoneCountryCode,
                phoneNumber: counselorPhoneNumber,
                userPassword : newcounselorPassword,
                uniqueIdentifier : await AuthService.generrateUniqueIdentification()
            }

            // CREATE NEW COUNSELOR
            let newCounselorDetail = await new User(toSave).save();
            if (!newCounselorDetail)
                throw new BaseError(GeneralError.SOMETHING_WENT_WRONG);

            // IF COUNSELOR CREATE, ADD NEW RECORD TO COUNSELOR PROFILE
            let newCounselorProfile = await new Counselor({
                user: newCounselorDetail._id,
                address: {
                    country: country,
                    state: state,
                    city: city,
                    address: address
                },
                slug: firstName.toLowerCase(),
                counselorStatus: 'ON BOARDING'
            }).save()

            if (!newCounselorProfile)
                throw new BaseError(GeneralError.SOMETHING_WENT_WRONG)

            return res.status(200).send({ status: 200, message: "NEW COUNSELOR CREATED" })
        } catch (err) {
            next(err)
        }
    },
    updateCounselorDetail: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            let counselorID = req.body.counselorID;
            // UPDATE COUNSELOR DETAIL AGAINST PROVIDED COUNSELOR ID
            delete req.body.counselorID;
            let updateCounselorDetail = await Counselor.findByIdAndUpdate(counselorID, req.body)

            if (!updateCounselorDetail)
                throw new BaseError(GeneralError.SOMETHING_WENT_WRONG)

            return res.status(200).send({ status: 200, message: "COUNSELOR PROFILE UPDATED" })
        } catch (err) {
            next(err)
        }
    }
}

export default AdminController;