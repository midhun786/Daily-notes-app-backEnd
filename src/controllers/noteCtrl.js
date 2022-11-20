const Notes = require("../Schema/noteModel");

const noteCtrl = {
  getNotes: async (req, res) => {
   // console.log(req.user)
    try {
      const notes = await Notes.find({ user_id: req.user.id });

      //console.log(notes)
      res.json(notes);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createNote: async (req, res) => {
    try {
      const { title, content, date } = req.body;

      const newNote = new Notes({
        title,
        content,
        date,
        user_id: req.user.id,
        name: req.user.name,
      });
      await newNote.save();
      res.json({ msg: "Created a Note " });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteNote: async (req, res) => {
    try {
      await Notes.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted A Note" });
    } catch (err) {
      return res.status(500).json({ msg: err.messgage });
    }
  },
  updateNote: async (req, res) => {
    try {
        const {title,content,date}=req.body;
        await Notes.findOneAndUpdate({_id: req.params.id},{
            title,
            content,
            date
        })
        res.json({msg:"Updated a Note"})
    } catch (err) {
      return res.status(500).json({ msg: err.messgage });
    }
  },
  getNote: async (req, res) => {
    try {
        const note = await Notes.findById(req.params.id)
        res.json(note)
    } catch (err) {
      return res.status(500).json({ msg: err.messgage });
    }
  },
};

module.exports = noteCtrl;
