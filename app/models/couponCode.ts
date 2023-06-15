import mongoose, { model, Model, Schema } from 'mongoose';
import couponCode from '../interface/models/couponCodeModel';

const CouponCodeSchema = new Schema<couponCode>({
    codeName: {
        type : String,
        required : true
    },
    codeDiscountValue: {
        type : Number
    },
    isActive: {
        type : Boolean,
        default : true
    },
    packageSpecific: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
    },
    packageA_Specific: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
    },
    packageA_discount: {
        type : Number
    },
    packageOther_discount: {
        type : Number
    },
    benifitType: {
        type : String
    },
    codeStartDate: {
        type : String
    },
    codeExpiryDate: {
        type : String
    },
    usageType: {
        type : String
    },
    freeService: []
}, {
    timestamps: true,
})

const CouponCodeschema: Model<couponCode> = model('CouponCode', CouponCodeSchema)
export default CouponCodeschema;
