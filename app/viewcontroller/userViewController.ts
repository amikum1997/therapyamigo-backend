import { INext, IRequest, IResponse } from "../interface/vendors";

const userViewController = {
        userDashbaord : async (req: IRequest, res: IResponse, next: INext) => {
            if(!req.user){
                res.render("utility/error404")
            }else{
                res.render("dashboard/clientDashboard")
            }
        }
}

export default userViewController;