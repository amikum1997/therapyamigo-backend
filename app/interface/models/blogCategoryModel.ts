import { Document, ObjectId } from "mongoose";

interface blogCategory extends Document {
    categoryName : string,
    categorySlug : string,
    categoryTags : [string],
    categoryDesc : string,
    isActive : boolean
}

export default blogCategory;