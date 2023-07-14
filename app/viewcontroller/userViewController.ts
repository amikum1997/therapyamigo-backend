import BaseError from "../error/baseError";
import { INext, IRequest, IResponse } from "../interface/vendors";
import Counselor from "../models/counselor";


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
            let allCounselorsList = await Counselor.find({}).populate(['user']);
            if (!allCounselorsList)
                throw new BaseError('No Counselor Found')

            return res.render("screens/dashboard/counselorManagement", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail),
                counselorList : allCounselorsList
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
    },
    adminBlogListing: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/adminBlogListing", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    adminVideoListing: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/adminVideoListing", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    assessmentListing: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/assessmentListing", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    assessmentReport: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/assessmentReport", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    clientReport: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/clientReport", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    corporateReport: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/corporateReport", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    counselorPay: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/counselorPay", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    counselorPerformance: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/counselorPerformance", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    newAssessment: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/newAssessment", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    newBlog: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/newBlog", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    },
    vendorReport: async (req: IRequest, res: IResponse, next: INext) => {
        const userDetail: any = req.user;
        if (!userDetail || userDetail.userRole != "ADMIN") {
            res.render("screens/utility/error404" , {layout: "layouts/clientLayout"})
        }else{
            return res.render("screens/dashboard/vendorReport", {
                layout: "layouts/dashboardLayout",
                user: JSON.stringify(userDetail)
            })
        }
    }

}

export default userViewController;