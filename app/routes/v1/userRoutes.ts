import express from "express";
import userViewController from "../../viewcontroller/userViewController";

const userRouter = express.Router()

// VIEW ROUTES
userRouter.route('/dashboard').get(userViewController.userDashbaord)

export default userRouter;
