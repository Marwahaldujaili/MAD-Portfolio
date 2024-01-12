import { Schema, model } from mongoose

const shareSchema = new Schema({
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
 createdAt: { type: Date, default: Date.now },
})

const Share = mongoose.model('Share', shareSchema)

export default Share;

