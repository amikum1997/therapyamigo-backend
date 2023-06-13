import { Document, ObjectId } from "mongoose";

interface userSessionInterface extends Document {
    emailVerificationToken: {
        token: string,
        expiry: string
    },
    phoneVerificationOtp: {
        otp: string,
        expiry: string
    },
    user: ObjectId,
}

export default userSessionInterface;