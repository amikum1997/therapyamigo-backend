import mongoose, { model, Model, Schema } from 'mongoose';
import slotsInterface from '../interface/models/slotsModel';

const SlotsSchema = new Schema<slotsInterface>({
    counselor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Counselor',
        required : true
    },
    slotDate: {
        type: Date
    },
    comment: {
        type: String
    },
    slotStartTime: {
        type: Date
    },
    slotEndTime: {
        type: Date
    },
    isOpen: {
        type: Boolean
    },
    isClosed: {
        type: Boolean
    },
    isSlotAccoupied: {
        type: Boolean
    },
    slotHistory: [],
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
    }
}, {
    timestamps: true,
})

const Slotsschema: Model<slotsInterface> = model('Slots', SlotsSchema)
export default Slotsschema;
