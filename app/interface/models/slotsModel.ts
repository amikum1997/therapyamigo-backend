import { Document, ObjectId } from "mongoose";

interface slotsInterface extends Document {
    counselor: ObjectId,
    slotDate: string,
    comment: string,
    slotStartTime: string,
    slotEndTime: string,
    isOpen: boolean,
    isClosed: boolean,
    isSlotAccoupied: boolean,
    slotHistory: [],
    appointment: ObjectId
}

export default slotsInterface;