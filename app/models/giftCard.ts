import mongoose, { model, Model, Schema } from 'mongoose';
import giftCard from '../interface/models/giftCardModel';

const GiftCardSchema = new Schema<giftCard>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderID: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    sessionCount: {
        type: Number,
        required: true
    },
    senderEmail: {
        type: String,
        required: true
    },
    senderName: {
        type: String
    },
    recipientEmail: {
        type: String
    },
    userPersonalMessage: {
        type: String
    },
    redeemedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
})

const GiftCardschema: Model<giftCard> = model('GiftCard', GiftCardSchema)
export default GiftCardschema;
