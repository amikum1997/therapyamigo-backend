import express from 'express';
import AdminController from '../../controllers/adminController';


const adminRouter = express.Router()

adminRouter.route('/new-counselor').post(AdminController.createNewCounselor)
adminRouter.route('/counselor-list').get(AdminController.getAllCounselorsList)

export default adminRouter;