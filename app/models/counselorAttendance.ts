import mongoose, { model, Model, Schema } from 'mongoose';
import counselorAttendance from '../interface/models/counselorAttendanceModel';

const CounselorAttendanceSchema = new Schema<counselorAttendance>({
    counselor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Counselor',
        required: true
    },
    date: {
        type : Date
    },
    status: {
        type : String,
        default : "CHECK IN",
        enum : ["CHECK IN" , "CHECK OUT"]
    },
    workStartTime: {
        type : Date
    },
    workEndTime: {
        type : Date
    }
}, {
    timestamps: true,
})

const CounselorAttendanceschema: Model<counselorAttendance> = model('CounselorAttendance', CounselorAttendanceSchema)
export default CounselorAttendanceschema;
