import mongoose, { model, Model, Schema } from 'mongoose';
import giftCard from '../interface/models/giftCardModel';

const GiftCardSchema = new Schema<giftCard>({

}, {
    timestamps: true,
})

const GiftCardschema: Model<giftCard> = model('GiftCard', GiftCardSchema)
export default GiftCardschema;
