import express from "express";
import userViewController from "../../viewcontroller/userViewController";

const userRouter = express.Router()

// VIEW ROUTES
userRouter.route('/dashboard').get(userViewController.userDashbaord)
userRouter.route('/seo-dashboard').get(userViewController.websiteAnalyticsDashboard)
userRouter.route('/helpdesk-dashboard').get(userViewController.helpDeskAnalyticsDashboard)
// ADMIN MANAGE SCREENS
userRouter.route('/manage/counselors').get(userViewController.manageCounselors)
userRouter.route('/manage/all-clients').get(userViewController.websiteUsers)
userRouter.route('/manage/transactions').get(userViewController.manageTransaction)
userRouter.route('/manage/internal-tickets').get(userViewController.internalTicketManagement)
userRouter.route('/manage/corporate-management').get(userViewController.corporateManagement)
userRouter.route('/manage/vendor-management').get(userViewController.vendorManagement)
// ADMIN REPORT SCREENS
userRouter.route('/reporting/counselor-performance').get(userViewController.counselorPerformance)
userRouter.route('/reporting/counselor-pay').get(userViewController.counselorPay)
userRouter.route('/reporting/client-report').get(userViewController.clientReport)
userRouter.route('/reporting/corporate-report').get(userViewController.corporateReport)
userRouter.route('/reporting/vendor-report').get(userViewController.vendorReport)
userRouter.route('/reporting/assessment-report').get(userViewController.assessmentReport)
// ADMIN MANAGE CONTENT
userRouter.route('/manage-content/admin-blog-listing').get(userViewController.adminBlogListing)
userRouter.route('/manage-content/blog').get(userViewController.newBlog)
userRouter.route('/manage-content/admin-video-lising').get(userViewController.adminVideoListing)
userRouter.route('/manage-content/admin-assessment-lising').get(userViewController.assessmentListing)
userRouter.route('/manage-content/assessment').get(userViewController.newAssessment)


export default userRouter;
