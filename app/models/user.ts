import mongoose, { Schema, Model, model } from 'mongoose';
import { userModel } from '../interface/models/userModel';

const userSchema = new Schema<userModel>({
    userName: {
        type: String,
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        enum: ['USER', 'ADMIN', 'CORPORATE', 'COUNSELOR', 'VENDOR'],
        default: "USER"
    },
    countryCode: {
        type: String,
        default: "+91"
    },
    phoneNumber: {
        type: String
    },
    regRefrence: {
        type: String,
        enum: ["ORGANIC","THERAPY-AMIGO", "CORPORATE", "VENDOR", "CORPORATE-DEPENDENT"]
    },
    userCorporateRefrence: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Corporate',
    },
    userVendorRefrence: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
    },
    uniqueIdentifier: {
        type: String,
        required: true,
        unique: true,
        maxlength: 10
    },
    userProfilePicture: {
        type: String
    },
    isCouple: {
        type: Boolean,
        default: false
    },
    coupleRefrence: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    currentCounselor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Counselor',
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isDualAuthenticationEnabled: {
        type: Boolean,
        default: false
    },
    totalBal: {
        type: Number,
        default: 0
    },
    totalBalComsumed: {
        type: Number,
        default: 0
    },
    isUserBanned: {
        type: Boolean,
        default: false
    },
    userCurrentPlan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plans',
    },
    selfHelpAccess: {
        plan: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Plans',
        },
        validity: {
            type: Date,
        },
    },
    chatAccess: {
        creditsLeft: {
            type: Number,
            default: 0
        },
        creditExpiry: {
            type: Number
        }
    }
}, {
    autoIndex: true,
    timestamps: true
})

userSchema.set('toJSON', {
    getters: true,
    virtuals: false,
    transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});

const User: Model<userModel> = model('User', userSchema);
export default User;
