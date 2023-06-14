import { Document, ObjectId } from "mongoose";

interface assessmentRecordInterface extends Document {
    assessment : ObjectId,
    user : ObjectId,
    email : string,
    phone : string,
    score : [
        {
            scoreType : string,
            scoreValue : number
        }
    ],
    result : [
        {
            resultType : string,
            resultValue : string
        }
    ],
    reply : [
        {
            questionTitle: string,
            option: string,
            points : string
        }
    ],
}

export default assessmentRecordInterface;