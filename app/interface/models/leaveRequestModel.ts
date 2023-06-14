import { Document, ObjectId } from "mongoose";

interface leaveInterface extends Document {
    counselor: ObjectId,
    leaveRequestDate: Date,
    leaveStartDate: Date,
    leaveEndDate: Date,
    leaveType: string,
    attachedDoc: string,
    leaveReason: string,
    comment: string,
    isApproved: boolean
}

export default leaveInterface;