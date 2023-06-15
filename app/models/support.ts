import mongoose, { model, Model, Schema } from 'mongoose';
import supportInterface from '../interface/models/supportModel';

const SupportSchema = new Schema<supportInterface>({

}, {
    timestamps: true,
})

const Supportschema: Model<supportInterface> = model('Support', SupportSchema)
export default Supportschema;
