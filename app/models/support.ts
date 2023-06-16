import mongoose, { model, Model, Schema } from 'mongoose';
import supportInterface from '../interface/models/supportModel';

const SupportSchema = new Schema<supportInterface>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    queryType: {
        type: String,
        required: true
    },
    queryDetail: {
        type: String
    },
    handeledBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    visibleToRoles: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: false
    },
    comment: [
        {
            _id: false,
            comment: {
                type: String
            },
            commentedBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            time: {
                type: Date
            }
        }
    ]
}, {
    timestamps: true,
})

const Supportschema: Model<supportInterface> = model('Support', SupportSchema)
export default Supportschema;
