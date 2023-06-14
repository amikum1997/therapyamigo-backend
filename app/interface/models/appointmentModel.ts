import { Document, ObjectId } from "mongoose";

interface appointmentInterface extends Document {
    user : ObjectId,
    counselor : ObjectId,
    feedback : ObjectId,
    session_type : string,
    session_mode : string,
    session_consumed : number,
    slot : [ObjectId],
    comment :string,
    appointmentStatus : string,
    appointmentDate : Date,
    appointmentStartTime : Date,
    appointmentEndTime : Date,
    resheduleCount : number,
    paidBy : ObjectId,
    cancelledByUser : boolean,
    cancelledByCounselor : boolean,
    refunded : boolean,
    createdBy : ObjectId,
    updatedBy : ObjectId,
    meetLink : {},
}

export default appointmentInterface;