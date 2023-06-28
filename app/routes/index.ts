import express from 'express';
import authRouter from './v1/authRouter';
import userRouter from './v1/userRoutes';
import adminRouter from './v1/adminRoutes';


const router = express.Router()

// v1 routes
router.get('/', (req, res) => {res.render("index")});
router.use('/' , authRouter)
router.use('/' , userRouter)
router.use('/' , adminRouter)


export default router;