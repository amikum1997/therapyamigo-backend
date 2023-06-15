import mongoose, { model, Model, Schema } from 'mongoose';
import myupdateInterface from '../interface/models/myUpdateModel';

const MyUpdateSchema = new Schema<myupdateInterface>({

}, {
    timestamps: true,
})

const MyUpdateschema: Model<myupdateInterface> = model('MyUpdate', MyUpdateSchema)
export default MyUpdateschema;
