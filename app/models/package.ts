import mongoose, { model, Model, Schema } from 'mongoose';
import packageInterface from '../interface/models/packageModel';

const PackageSchema = new Schema<packageInterface>({
    planName: {
        type: String,
        required : true
    },
    planCostInRupees: {
        type: Number,
        required  :true
    },
    planCostInUSD: {
        type: Number,
        required  :true
    },
    planMode: {
        type: String,
    },
    planIncludes: {
        type: String,
        required : true
    },
    planValidity: {
        type: String
    },
    planSelfHelpAccess: {
        type: Number
    },
    planDiscount: {
        type: Number
    },
    gstPercent: {
        type: Number
    },
    totalSessions: {
        type: Number
    },
    packageOrder: {
        type: Number
    }
}, {
    timestamps: true,
})

const Packageschema: Model<packageInterface> = model('Package', PackageSchema)
export default Packageschema;
