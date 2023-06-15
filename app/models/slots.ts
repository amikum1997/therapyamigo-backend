import mongoose, { model, Model, Schema } from 'mongoose';
import slotsInterface from '../interface/models/slotsModel';

const SlotsSchema = new Schema<slotsInterface>({

}, {
    timestamps: true,
})

const Slotsschema: Model<slotsInterface> = model('Slots', SlotsSchema)
export default Slotsschema;
