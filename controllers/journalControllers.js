import Journal from "../models/Journal";

const createJournalEntry = async (req, res, next) => {
  try {
    console.log(req.body)
    const { user,title, content, tags } = req.body;
    // Retrieve user ID from authenticated user
    
    const journalEntry = await Journal.create({ title, content, tags, user });
    
    res.status(201).json(journalEntry);
  } catch (error) {
    next(error);
  }
};

const updateJournalEntry = async (req, res, next) => {
  try {
    const journalEntry = await Journal.findById(req.params.id);

    if (!journalEntry) {
      const error = new Error("Journal entry was not found");
      next(error);
      return;
    }

    const { title, content, tags } = req.body;
    journalEntry.title = title || journalEntry.title;
    journalEntry.content = content || journalEntry.content;
    journalEntry.tags = tags || journalEntry.tags;

    const updatedJournalEntry = await journalEntry.save();
    res.json(updatedJournalEntry);
  } catch (error) {
    next(error);
  }
};

const deleteJournalEntry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const journalEntry = await Journal.findByIdAndDelete(id);

    if (!journalEntry) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    res.json({ message: "Journal entry deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const getJournalEntry = async (req, res, next) => {
  try {
    
    const id = req.params.id;
    
    const journalEntry = await Journal.find({ user: id });
    console.log(journalEntry)
   
    if (!journalEntry) {
      return res.status(404).json({ message: "Journal entry not found" });
    }
  
  res.json(journalEntry);
  } catch (error) {
    next(error);
  }
};

const getAllJournalEntries = async (req, res, next) => {
  try {
    const journalEntries = await Journal.find();
    res.json(journalEntries);
  } catch (error) {
    next(error);
  }
};

export { createJournalEntry, updateJournalEntry, deleteJournalEntry, getJournalEntry, getAllJournalEntries };
