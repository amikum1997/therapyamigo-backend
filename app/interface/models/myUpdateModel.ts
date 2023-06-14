import { Document, ObjectId } from "mongoose";

interface myupdateInterface extends Document {
    user : ObjectId,
    type : string,
    updateHeading : string,
    updateSubHead : string,
    updateDesc : string,
    updateCategory : string,
    link : string,
}

export default myupdateInterface;