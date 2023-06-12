import express from 'express';
import authViewController from '../../viewcontroller/authViewController';
import authController from '../../controllers/authController';


const authRouter = express.Router()

// VIEW ROUTES
authRouter.route('/login').get(authViewController.login)
authRouter.route('/register').get(authViewController.register)
authRouter.route('/forgot-password').get(authViewController.forgotPassword)
authRouter.route('/reset-password').get(authViewController.resetPassword)
authRouter.route('/verify-account').get(authViewController.verifyAccount)

// DATA CONTROLLER ROUTES
authRouter.route('/auth/login').post(authController.login)



export default authRouter;
