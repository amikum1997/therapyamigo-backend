import mongoose, { model, Model, Schema } from 'mongoose';
import leaveInterface from '../interface/models/leaveRequestModel';

const LeaveRequestSchema = new Schema<leaveInterface>({

}, {
    timestamps: true,
})

const LeaveRequestschema: Model<leaveInterface> = model('LeaveRequest', LeaveRequestSchema)
export default LeaveRequestschema;
