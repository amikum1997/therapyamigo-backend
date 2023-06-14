import { Document, ObjectId } from "mongoose";

interface couponCode extends Document {
    codeName: string,
    codeDiscountValue: number,
    isActive: boolean,
    packageSpecific: ObjectId,
    packageA_Specific: ObjectId,
    packageA_discount: number,
    packageOther_discount: number,
    benifitType: string,
    codeStartDate: string,
    codeExpiryDate: string,
    usageType: string,
    freeService: [string]
}

export default couponCode;