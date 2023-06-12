import mongoose, { model, Model, Schema } from 'mongoose';
import userSessionInterface from '../interface/models/userSession';

const UserSessionSchema = new Schema<userSessionInterface>({
    emailVerificationToken: {
        token: {
            type: String,
        },
        expiry: {
            type: String
        }
    },
    phoneVerificationOtp: {
        otp: {
            type: String,
        },
        expiry: {
            type: String
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true,
})

const UserSessionschema: Model<userSessionInterface> = model('UserSession', UserSessionSchema)
export default UserSessionschema;
