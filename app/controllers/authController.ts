import { INext, IRequest, IResponse } from "../interface/vendors";
import BaseError from "../error/baseError";
import bcrypt from 'bcryptjs';
import User from "../models/user";
import passport from "passport";
import { IVerifyOptions } from "passport-local";
import '../config/passport';

const authController = {
    login: async (req: IRequest, res: IResponse, next: INext) => {
        passport.authenticate("local", (error: any, user: any, info: IVerifyOptions) => {
            if (error) { return next(error); }
            if (!user) {
                res.status(400).send({ status: 400, message: info.message })
            }
            req.logIn(user, (err) => {
                if (err) { return next(err); }
                return res.status(200).send({ status: 200, data: user })
            });
        })(req, res, next);
    },

    register: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            const { userName, userEmail, userPassword } = req.body
            // CHECK IF USER EXIST
            let userDetail = await User.findOne({ userEmail: new RegExp(userEmail, 'i') });
            if (userDetail)
                throw new BaseError("USER ALREADY REGISTERED !! PLEASE TRY LOGIN , IF FORGOT PASSWORD TRY RESET PASSWORD")

            const salt = await bcrypt.genSalt(10);
            let userPasswordForMail = req.body.userPassword;
            req.body.userPassword = await bcrypt.hash(userPassword, salt);

            // SAVE USER TO DB
            let newUser = await new User({
                userName: userName,
                userEmail: userEmail,
                userPassword: req.body.userPassword
            }).save()

            if (!newUser)
                throw new BaseError("SOMETHING WENT WRONG!! PLEASE TRY AGAIN")

            res.status(200).send({ status: 200, message: "USER REGISTERED SUCCESSFULLY!!" })

        } catch (err) {
            next(err)
        }
    },
    forgotPassword: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
    verifyAccount: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
    resetPassword: async (req: IRequest, res: IResponse, next: INext) => {
        try {

        } catch (err) {
            next(err)
        }
    },
}

export default authController;
