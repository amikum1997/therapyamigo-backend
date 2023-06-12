import environment from "../config/environment";
import { IRequest, IResponse, INext } from "../interface/vendors";
import session from "express-session";

const sessionMiddleware = (req: IRequest, res: IResponse, next: INext) => {
    try {
        return session({
            secret: environment.jwtSecret as unknown as string,
            resave: false,
            saveUninitialized: false,
        })(req, res, next);
    } catch (err) {
        next(err)
    }
}

export default sessionMiddleware;