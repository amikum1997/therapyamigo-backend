import { INext, IRequest, IResponse } from "../interface/vendors";


const authViewController = {
    login: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            if (!req.user) {
                res.render("authentication/login")
            } else {
                res.render("dashboard/clientDashboard")
            }
        } catch (err) {
            next(err)
        }
    },
    register: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            res.render("authentication/register")
        } catch (err) {
            next(err)
        }
    },
    forgotPassword: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            res.render("authentication/forgotPassword")
        } catch (err) {
            next(err)
        }
    },
    resetPassword: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            res.render("authentication/resetPassword")
        } catch (err) {
            next(err)
        }
    },
    verifyAccount: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            res.render("authentication/verifyAccount")
        } catch (err) {
            next(err)
        }
    },
}

export default authViewController;