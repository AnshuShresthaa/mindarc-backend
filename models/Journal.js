import { Schema, model } from "mongoose";

const JournalSchema = new Schema({ 
    title: {type: String, required: true},
    content: {type: String, required: true},
    tags: {type: [String]},
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const Journal = model("Journal", JournalSchema);
export default Journal;
