import mongoose, { model, Model, Schema } from 'mongoose';
import leaveInterface from '../interface/models/leaveRequestModel';

const LeaveRequestSchema = new Schema<leaveInterface>({
    counselor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Counselor',
        required: true
    },
    leaveRequestDate: {
        type: Date,
        required: true
    },
    leaveStartDate: {
        type: Date,
        required: true
    },
    leaveEndDate: {
        type: Date,
        required: true
    },
    leaveType: {
        type: String,
        required: true
    },
    attachedDoc: {
        type: String
    },
    leaveReason: {
        type: String,
    },
    comment: {
        type: String
    },
    isApproved: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
})

const LeaveRequestschema: Model<leaveInterface> = model('LeaveRequest', LeaveRequestSchema)
export default LeaveRequestschema;
