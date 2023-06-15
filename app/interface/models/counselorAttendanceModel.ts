import { Document, ObjectId } from "mongoose";

interface counselorAttendance extends Document {
    counselor: ObjectId,
    date: Date,
    status: string,
    workStartTime: Date,
    workEndTime: Date
}

export default counselorAttendance;