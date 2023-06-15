import mongoose, { model, Model, Schema } from 'mongoose';
import packageInterface from '../interface/models/packageModel';

const PackageSchema = new Schema<packageInterface>({

}, {
    timestamps: true,
})

const Packageschema: Model<packageInterface> = model('Package', PackageSchema)
export default Packageschema;
