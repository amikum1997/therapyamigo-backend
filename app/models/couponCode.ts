import mongoose, { model, Model, Schema } from 'mongoose';
import couponCode from '../interface/models/couponCodeModel';

const CouponCodeSchema = new Schema<couponCode>({

}, {
    timestamps: true,
})

const CouponCodeschema: Model<couponCode> = model('CouponCode', CouponCodeSchema)
export default CouponCodeschema;
