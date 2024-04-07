import Mood from "../models/Mood";

const createMoodEntry = async (req, res, next) => {
  try {
    const moodEntry = await Mood.create(req.body);
    res.status(201).json(moodEntry);
  } catch (error) {
    next(error);
  }
};

const updateMoodEntry = async (req, res, next) => {
  try {
    const moodEntry = await Mood.findById(req.params.id);

    if (!moodEntry) {
      const error = new Error("Mood entry was not found");
      next(error);
      return;
    }

    const { mood, note } = req.body;
    moodEntry.mood = mood || moodEntry.mood;
    moodEntry.note = note || moodEntry.note;

    const updatedMoodEntry = await moodEntry.save();
    res.json(updatedMoodEntry);
  } catch (error) {
    next(error);
  }
};

const deleteMoodEntry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const moodEntry = await Mood.findByIdAndDelete(id);

    if (!moodEntry) {
      return res.status(404).json({ message: "Mood entry not found" });
    }

    res.json({ message: "Mood entry deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const getMoodEntry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const moodEntry = await Mood.findById(id);
    if (!moodEntry) {
      return res.status(404).json({ message: "Mood entry not found" });
    }

    res.json(moodEntry);
  } catch (error) {
    next(error);
  }
};

const getAllMoodEntries = async (req, res, next) => {
  try {
    const moodEntries = await Mood.find();
    res.json(moodEntries);
  } catch (error) {
    next(error);
  }
};

export { createMoodEntry, updateMoodEntry, deleteMoodEntry, getMoodEntry, getAllMoodEntries };
