import { INext, IRequest, IResponse } from "../interface/vendors";

const userViewController = {
    userDashbaord: async (req: IRequest, res: IResponse, next: INext) => {
        if (!req.user) {
            res.render("utility/error404")
        } else {
            const userDetail: any = req.user;
            if (userDetail.userRole === "USER") {
                return res.render("dashboard/userDashboard/clientDashboard", {
                    user: JSON.stringify(userDetail)
                })
            }
            if (userDetail.userRole === "ADMIN") {
                return res.render("dashboard/userDashboard/adminDashboard", {
                    user: JSON.stringify(userDetail)
                })
            }
            if (userDetail.userRole === "CORPORATE") {
                return res.render("dashboard/userDashboard/corporateDashboard", {
                    user: JSON.stringify(userDetail)
                })
            }
            if (userDetail.userRole === "COUNSELOR") {
                return res.render("dashboard/userDashboard/counselorDashboard", {
                    user: JSON.stringify(userDetail)
                })
            }
            if (userDetail.userRole === "VENDOR") {
                return res.render("dashboard/userDashboard/vendorDashboard", {
                    user: JSON.stringify(userDetail)
                })
            }
        }
    }
}

export default userViewController;