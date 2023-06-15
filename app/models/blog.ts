import mongoose, { model, Model, Schema } from 'mongoose';
import blogInterface from '../interface/models/blogModel';

const BlogSchema = new Schema<blogInterface>({
    blogTitle: {
        type: String,
        required: true
    },
    blogMeta: [{
        _id: false,
        name: {
            type: String
        },
        content: {
            type: String
        }
    }],
    publishDate: {
        type: Date
    },
    blogShortDesc: {
        type: String,
        required: true
    },
    blogSlug: {
        type: String,
        required: true
    },
    blogData: {
        type: String,
        required: true
    },
    blogHeaderImage: {
        type: String,
        required: true
    },
    blogTags: [],
    blogStatus: {
        type: String,
        required: true,
        default: "DRAFT",
        enum: ["PUBLISHED", "DRAFT", "DEPRECATED"]
    },
    blogCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategory',
        required: true
    },
    blogConcern: {
        type: String
    },
    blogSubConcern: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
})

const Blogschema: Model<blogInterface> = model('Blog', BlogSchema)
export default Blogschema;
