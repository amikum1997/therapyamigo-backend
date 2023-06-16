import mongoose, { model, Model, Schema } from 'mongoose';
import paymentInterface from '../interface/models/paymentModel';

const PaymentSchema = new Schema<paymentInterface>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    paymentMode: {
        type: String
    },
    transactionID: {
        type: String
    },
    paymentAmount: Number,
    paymentCurrency: {
        type: String
    },
    paymentDate: {
        type: Date
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
    },
    isCouponApplied: {
        type: Boolean
    },
    CouponCode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CouponCode',
    },
    txnResponse: {},
    paymentStatus: {
        type: String
    },
    isCaptured: {
        type: Boolean
    },
    paymentDisposition: {
        type: String
    },
    isVerified: {
        type: Boolean
    }
}, {
    timestamps: true,
})

const Paymentschema: Model<paymentInterface> = model('Payment', PaymentSchema)
export default Paymentschema;
