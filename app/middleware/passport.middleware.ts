import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user";
import bcrypt from 'bcryptjs';
import BaseError from "../error/baseError";
import { IRequest } from "../interface/vendors";

passport.use(
    new LocalStrategy({
        usernameField: "username",
        passwordField: "password"
    } as any,

        async (username: any, password, done: any) => {
            // CHECK IF USER EXIST OR NOT
            const user = await User.findOne({ userEmail: new RegExp(username, 'i') })
            if (user && await bcrypt.compare(password, user?.userPassword)) done(null, user)
            else done(null, false)
        }

    )
)


passport.serializeUser((user: any, done: any) => {
    try {
        done(null, user._id)
    } catch (error) {
        done(error)
    }
})

passport.deserializeUser(async (req: IRequest, id: string, done: any) => {
    try {
        const user = User.findById(id);
        done(null, user)
    } catch (error) {
        done(error)
    }
})

export default passport