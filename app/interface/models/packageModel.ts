import { Document, ObjectId } from "mongoose";

interface packageInterface extends Document {
    planName : string,
    planCostInRupees : number,
    planCostInUSD : number,
    planMode:string,
    planIncludes : string,
    planValidity : string,
    planSelfHelpAccess : number,
    planDiscount : number,
    gstPercent : number,
    totalSessions : number,
    packageOrder : number
}

export default packageInterface;