import { INext, IRequest, IResponse } from "../interface/vendors";
import BaseError from "../error/baseError";
import bcrypt from 'bcryptjs';
import User from "../models/user";
import { GeneralError } from "../error/errorConstants";
import Counselor from "../models/counselor";


const AdminController = {
    createNewCounselor: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            let { counselorName, counselorEmail, counselorPassword, counselorPhoneNumber, counselorPhoneCountryCode } = req.body;
            // FORMAT STRUCTURE TO CREATE A NEW USER WITH ROLE COUNSELOR
            const salt = await bcrypt.genSalt(10);
            let cPass = req.body.counselorPassword;
            req.body.counselorPassword = await bcrypt.hash(counselorPassword, salt);
            let toSave = {
                userName: counselorName,
                userEmail: counselorEmail,
                userRole: "COUNSELOR",
                countryCode: counselorPhoneCountryCode,
                phoneNumber: counselorPhoneNumber
            }

            // CREATE NEW COUNSELOR
            let newCounselorDetail = await new User(toSave).save();
            if (!newCounselorDetail)
                throw new BaseError(GeneralError.SOMETHING_WENT_WRONG);

            // IF COUNSELOR CREATE, ADD NEW RECORD TO COUNSELOR PROFILE
            let newCounselorProfile = await new Counselor({
                user: newCounselorDetail._id,
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
            let {counselorID} = req.body;
            
        } catch (err) {
            next(err)
        }
    }
}

export default AdminController;