import express from 'express';
import authRouter from './v1/authRouter';
import userRouter from './v1/userRoutes';


const router = express.Router()

// v1 routes
router.get('/', (req, res) => {res.render("index")});
router.use('/' , authRouter)
router.use('/' , userRouter)


export default router;