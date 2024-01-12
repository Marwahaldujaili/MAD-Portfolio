import {Schema, model} from mongoose

const postSchema = new Schema ({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    shares: [{ type: Schema.Types.ObjectId, ref: 'Share' }],
    categories: [{ type: String }],
    tags: [{ type: String }],
    keywords: [{ type: String }],
})

const Post = mongoose.model('Post', postSchema)
export default Post

