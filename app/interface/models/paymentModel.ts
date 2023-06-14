import { Document, ObjectId } from "mongoose";

interface paymentInterface extends Document {
    user : ObjectId,
    paymentMode : string,
    transactionID : string,
    paymentAmount : Number,
    paymentCurrency : string,
    paymentDate  :any,
    package : ObjectId,
    isCouponApplied : boolean,
    CouponCode : ObjectId,
    txnResponse : any,
    paymentStatus : string,
    isCaptured : boolean,
    paymentDisposition: string,
    isVerified : boolean
}

export default paymentInterface;