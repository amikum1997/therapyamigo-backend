import mongoose, { model, Model, Schema } from 'mongoose';
import paymentInterface from '../interface/models/paymentModel';

const PaymentSchema = new Schema<paymentInterface>({

}, {
    timestamps: true,
})

const Paymentschema: Model<paymentInterface> = model('Payment', PaymentSchema)
export default Paymentschema;
