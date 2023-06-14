import { Document, ObjectId } from "mongoose";

interface giftCard extends Document {
    user : ObjectId,
    orderID : string,
    code : string,
    sessionCount : number,
    senderEmail : string,
    senderName : string,
    recipientEmail : string,
    userPersonalMessage : string,
    redeemedBy : ObjectId,
    isActive : boolean,
}

export default giftCard;