import express from "express";
import userViewController from "../../viewcontroller/userViewController";

const userRouter = express.Router()

// VIEW ROUTES
userRouter.route('/dashboard').get(userViewController.userDashbaord)
userRouter.route('/seo-dashboard').get(userViewController.websiteAnalyticsDashboard)
userRouter.route('/helpdesk-dashboard').get(userViewController.helpDeskAnalyticsDashboard)
userRouter.route('/manage/counselors').get(userViewController.manageCounselors)
userRouter.route('/manage/all-clients').get(userViewController.websiteUsers)
userRouter.route('/manage/transactions').get(userViewController.manageTransaction)
userRouter.route('/manage/internal-tickets').get(userViewController.internalTicketManagement)
userRouter.route('/manage/corporate-management').get(userViewController.corporateManagement)
userRouter.route('/manage/vendor-management').get(userViewController.vendorManagement)

export default userRouter;
