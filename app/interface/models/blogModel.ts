import { Document, ObjectId } from "mongoose";

interface blogInterface extends Document {
    blogTitle: string,
    oldBlogId: string,
    blogMeta: [{
        name: string,
        content: string
    }],
    publishDate: Date,
    blogShortDesc: string,
    blogSlug: string,
    blogData: string,
    blogHeaderImage: string,
    blogTags: [string],
    blogStatus: String,
    blogCategory: ObjectId,
    blogConcern: String,
    blogSubConcern: String,
    createdBy: any,
    updatedBy: any
}

export default blogInterface;