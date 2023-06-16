import mongoose, { model, Model, Schema } from 'mongoose';
import myupdateInterface from '../interface/models/myUpdateModel';

const MyUpdateSchema = new Schema<myupdateInterface>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String
    },
    updateHeading: {
        type: String
    },
    updateSubHead: {
        type: String
    },
    updateDesc: {
        type: String
    },
    updateCategory: {
        type: String
    },
    link: {
        type: String
    },
    seen: {
        type: Boolean,
        default : false
    }
}, {
    timestamps: true,
})

const MyUpdateschema: Model<myupdateInterface> = model('MyUpdate', MyUpdateSchema)
export default MyUpdateschema;
