import { INext, IRequest, IResponse } from "../interface/vendors";

const userViewController = {
    userDashbaord: async (req: IRequest, res: IResponse, next: INext) => {
        if (!req.user) {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        } else {
            const userDetail: any = req.user;
            if (userDetail.userRole === "USER") {
                return res.render("screens/userDashboard/clientDashboard", {
                    layout: "layouts/clientLayout",
                    user: JSON.stringify(userDetail)
                })
            }
            if (userDetail.userRole === "ADMIN") {
                return res.render("screens/userDashboard/adminDashboard", {
                    layout: "layouts/dashboardLayout",
                    user: JSON.stringify(userDetail)
                })
            }
            if (userDetail.userRole === "CORPORATE") {
                return res.render("screens/userDashboard/corporateDashboard", {
                    layout: "layouts/dashboardLayout",
                    user: JSON.stringify(userDetail)
                })
            }
            if (userDetail.userRole === "COUNSELOR") {
                return res.render("screens/userDashboard/counselorDashboard", {
                    layout: "layouts/dashboardLayout",
                    user: JSON.stringify(userDetail)
                })
            }
            if (userDetail.userRole === "VENDOR") {
                return res.render("screens/userDashboard/vendorDashboard", {
                    layout: "layouts/dashboardLayout",
                    user: JSON.stringify(userDetail)
                })
            }
        }
    },
    websiteAnalyticsDashboard: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/userDashboard/websiteMetricesDashboard", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    helpDeskAnalyticsDashboard: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/userDashboard/helpdeskDashboard", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    websiteUsers: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/clientManagement", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    manageCounselors: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/counselorManagement", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    manageTransaction: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/transactionManagement", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    internalTicketManagement: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/internalTicketManagement", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    corporateManagement: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/corporateManagement", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    vendorManagement: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/vendorManagement", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    }

}

export default userViewController;