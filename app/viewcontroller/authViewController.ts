import environment from "../config/environment";
import { INext, IRequest, IResponse } from "../interface/vendors";


const authViewController = {
    login: async (req: IRequest, res: IResponse, next: INext) => {
        try {
            if (!req.user) {
                return res.render("authentication/login")
            } else {
                const userDetail: any = req.user;
                if (userDetail.userRole === "USER") {
                    return res.render("dashboard/userDashboard/clientDashboard", {
                        user: JSON.stringify(userDetail)
                    })
                }
                if (userDetail.userRole === "ADMIN") {
                    return res.render("dashboard/userDashboard/adminDashboard", {
                        user: userDetail
                    })
                }
                if (userDetail.userRole === "CORPORATE") {
                    return res.render("dashboard/userDashboard/corporateDashboard", {
                        user: userDetail
                    })
                }
                if (userDetail.userRole === "COUNSELOR") {
                    return res.render("dashboard/userDashboard/counselorDashboard", {
                        user: userDetail
                    })
                }
                if (userDetail.userRole === "VENDOR") {
                    return res.render("dashboard/userDashboard/vendorDashboard", {
                        user: userDetail
                    })
                }
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