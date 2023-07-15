import environment from "../config/environment";
import { INext, IRequest, IResponse } from "../interface/vendors";


const websiteViewController = {
    therapyIndex: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapy", { layout: "layouts/websiteLayout" })
    },
    faq: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/faq", { layout: "layouts/websiteLayout" })
    },
    blog: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/blogs", { layout: "layouts/websiteLayout" })
    },
    therapist: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapist", { layout: "layouts/websiteLayout" })
    },
    relationshipIssues: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapy/services/relationship-issues", { layout: "layouts/websiteLayout" })
    },
    selfEsteemIssues: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapy/services/self-esteem-issues", { layout: "layouts/websiteLayout" })
    },
    anxietyAndGrief: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapy/services/anxiety-and-grief", { layout: "layouts/websiteLayout" })
    },
    careerCounseling: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapy/services/career-counseling", { layout: "layouts/websiteLayout" })
    },
    familyIssues: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapy/services/family-psycology", { layout: "layouts/websiteLayout" })
    },
    youndAndAdult: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapy/services/young-adult-intensive", { layout: "layouts/websiteLayout" })
    },
    kidsFamilyPsycology: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapy/services/kids-family-psycology", { layout: "layouts/websiteLayout" })
    },
    individualIssues: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapy/services/individual-issues", { layout: "layouts/websiteLayout" })
    },
    coupleIssues: async (req: IRequest, res: IResponse, next: INext) => {
        res.render("screens/websiteScreens/therapy/services/couple-issues", { layout: "layouts/websiteLayout" })
    },
}

export default websiteViewController;