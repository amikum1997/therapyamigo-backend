import mongoose, { model, Model, Schema } from 'mongoose';
import appointmentFeedbackInterface from '../interface/models/appointmentFeedback';

const AppointmentFeedbackSchema = new Schema<appointmentFeedbackInterface>({
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
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: true
    },
    counselorRating: {
        type : Number
    },
    counselorReview: {
        type : String
    },
    operationalRating: {
        type : String
    },
    opertionalReview: {
        type : String
    },
    connectivityRating: {
        type : Number
    },
    connectivityReview: {
        type : String
    },
    otherIssues: {
        type : String
    },
    overallRating: {
        type : Number
    },
    isCompleted: {
        type : Boolean,
        default : false
    },
}, {
    timestamps: true,
})

const AppointmentFeedbackschema: Model<appointmentFeedbackInterface> = model('AppointmentFeedback', AppointmentFeedbackSchema)
export default AppointmentFeedbackschema;
