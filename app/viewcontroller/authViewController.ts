import environment from "../config/environment";
import { INext, IRequest, IResponse } from "../interface/vendors";


const authViewController = {
    login: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            if (!req.user) {
                return res.render("authentication/login", { layout: "layouts/clientLayout" })
            } else {
                return res.redirect('/dashboard')
            }
        } catch (err) {
            next(err)
        }
    },
    register: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            if (!req.user) {
                res.render("authentication/register", { layout: "layouts/clientLayout" })
            } else {
                return res.redirect('/dashboard')
            }
        } catch (err) {
            next(err)
        }
    },
    forgotPassword: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            if (!req.user) {
                res.render("authentication/forgotPassword", { layout: "layouts/clientLayout" })
            } else {
                return res.redirect('/dashboard')
            }
        } catch (err) {
            next(err)
        }
    },
    resetPassword: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            if (!req.user) {
                res.render("authentication/resetPassword", { layout: "layouts/clientLayout" })
            } else {
                return res.redirect('/dashboard')
            }
        } catch (err) {
            next(err)
        }
    },
    verifyAccount: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            if (!req.user) {
                res.render("authentication/verifyAccount", { layout: "layouts/clientLayout" })
            } else {
                return res.redirect('/dashboard')
            }
        } catch (err) {
            next(err)
        }
    },
}

export default authViewController;