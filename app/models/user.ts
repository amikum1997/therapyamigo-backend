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
