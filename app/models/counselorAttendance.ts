import mongoose, { model, Model, Schema } from 'mongoose';
import counselorAttendance from '../interface/models/counselorAttendanceModel';

const CounselorAttendanceSchema = new Schema<counselorAttendance>({

}, {
    timestamps: true,
})

const CounselorAttendanceschema: Model<counselorAttendance> = model('CounselorAttendance', CounselorAttendanceSchema)
export default CounselorAttendanceschema;
