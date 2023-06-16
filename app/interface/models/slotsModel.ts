import { Document, ObjectId } from "mongoose";

interface slotsInterface extends Document {
    counselor: ObjectId,
    slotDate: Date,
    comment: string,
    slotStartTime: Date,
    slotEndTime: Date,
    isOpen: boolean,
    isClosed: boolean,
    isSlotAccoupied: boolean,
    slotHistory: [],
    appointment: ObjectId
}

export default slotsInterface;