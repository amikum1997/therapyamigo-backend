import mongoose, { model, Model, Schema } from 'mongoose';
import counselorInterface from '../interface/models/counselorModel';

const CounselorSchema = new Schema<counselorInterface>({

}, {
    timestamps: true,
})

const Counselorschema: Model<counselorInterface> = model('Counselor', CounselorSchema)
export default Counselorschema;
