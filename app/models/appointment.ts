import mongoose, { model, Model, Schema } from 'mongoose';
import appointmentInterface from '../interface/models/appointmentModel';

const AppointmentSchema = new Schema<appointmentInterface>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    counselor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Counselor',
        required: true
    },
    feedback: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AppointmentFeedback',
        required: true
    },
    session_type: {
        type: String,
        required: true,
        enum: ['INDIVIDUAL', 'COUPLE']
    },
    session_mode: {
        type: String,
        required: true,
        enum: ['CALL', 'MESSAGE', 'VIDEO', 'FACE TO FACE']
    },
    session_consumed: {
        type: Number,
        required: true
    },
    slot: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Slots',
            _id: false
        }
    ],
    comment: {
        type: String
    },
    appointmentStatus: {
        type: String,
        required: true,
        enum: ['BOOKED', 'CANCELLED', 'NO-SHOW', 'RE-SHEDULED']
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentStartTime: {
        type: Date,
        required: true
    },
    appointmentEndTime: {
        type: Date,
        required: true
    },
    resheduleCount: {
        type: Number,
        default: 0
    },
    paidBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cancelledByUser: {
        type: Boolean,
        default: false
    },
    cancelledByCounselor: {
        type: Boolean,
        default: false
    },
    refunded: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
})

const Appointmentschema: Model<appointmentInterface> = model('Appointment', AppointmentSchema)
export default Appointmentschema;
