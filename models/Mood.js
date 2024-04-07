import { Schema, model } from "mongoose";

const MoodSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },  
    mood: { type: String, required: true },
    note: { type: String },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

const Mood = model("Mood", MoodSchema);
export default Mood;
