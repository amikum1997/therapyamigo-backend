import mongoose, { model, Model, Schema } from 'mongoose';
import blogCategory from '../interface/models/blogCategoryModel';

const BlogCategorySchema = new Schema<blogCategory>({
    categoryName: {
        type: String,
        required: true
    },
    categorySlug: {
        type: String,
        required: true
    },
    categoryTags: [],
    categoryDesc: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
})

const BlogCategoryschema: Model<blogCategory> = model('BlogCategory', BlogCategorySchema)
export default BlogCategoryschema;
