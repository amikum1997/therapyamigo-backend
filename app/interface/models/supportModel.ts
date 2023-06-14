import { Document, ObjectId } from "mongoose";

interface supportInterface extends Document {
    user : ObjectId,
    queryType : string,
    queryDetail : string,
    handeledBy : ObjectId,
    visibleToRoles : string,
    isActive : boolean,
    comment : [
        {
            comment : string,
            commentedBy : ObjectId,
            time : string
        }
    ]
}

export default supportInterface;