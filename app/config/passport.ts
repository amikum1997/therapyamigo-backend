import passport from "passport";
import passportLocal from "passport-local";
import User from "../models/user";
import bcrypt from 'bcryptjs';
import { INext, IRequest, IResponse } from "../interface/vendors";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((req, user, done) => {
    done(undefined, user);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err: NativeError, user: any) => done(err, user));
});

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {

    let user: any = await User.findOne({ userEmail: email })
    if (!user) return done(undefined, false, { message: `Email ${email} not found.` });

    bcrypt.compare(password, user.userPassword).then((res) => {
        return done(undefined, user);
    }).catch((err) => {
        return done(undefined, false, { message: "Invalid email or password." });
    });
}));

/**
 * Login Required middleware.
 */
export const isAuthenticated = (req: IRequest, res: IResponse, next: INext) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};


