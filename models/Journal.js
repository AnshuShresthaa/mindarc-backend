import { Schema, model } from "mongoose";

const JournalSchema = new Schema({ 
    title: {type: String, required: true},
    content: {type: String, required: true},
    tags: {type: [String]},
    date: { type: Date, default: Date.now },
}, { timestamps: true });

const Journal = model("Journal", JournalSchema);
export default Journal;
