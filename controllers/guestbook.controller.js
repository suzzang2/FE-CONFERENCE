import GuestBook from "../models/guestbook.model.js";

export const getAllEntries = async(req, res) => { //router에 쓸 거기 때문에, req&res를 받아줘야 함
   try{
      const entries = await GuestBook.find();
      // res.status(200).json({entries})
      res.render("guestbook", { entries }); 
   }
   catch{
      res.status(500).json({message : "Error getting all entries", error});
   }
}

export const getEntryById = async(req, res) => { //router에 쓸 거기 때문에, req&res를 받아줘야 함
   const {id} = req.params
   try{
      const entry = await GuestBook.findById(id);
      if (!entry) res.status(404).json({message : "ID does not exist."})
      res.status(200).json({message : "Success getting by ID"})
   }
   catch (error) {
      res.status(500).json({message : "Error getting by ID", error});
   }
}

export const createEntry = async (req, res) => { //router에 쓸 거기 때문에, req&res를 받아줘야 함
   const { author, message } = req.body;
   try{
      const newEntry = new GuestBook({ author, message });
      await newEntry.save(); // 몽고DB에 올라가게 된다.
      // res.status(201).json({message : "Success creating a entry"}) //생성에 성공했을 때는 주로 201코드를 쓴다?
      res.redirect("/guestbook");
   }
   catch{
      res.status(500).json({message : "Error creating a entry"});
   }
}

export const deleteEntry = (req, res) => { //router에 쓸 거기 때문에, req&res를 받아줘야 함
   try{
      res.status(200).json({message : "Success deleting a entry"}) 
   }
   catch{
      res.status(500).json({message : "Error editing a entry"});
   }
}

export const editEntry = (req, res) => { //router에 쓸 거기 때문에, req&res를 받아줘야 함
   try{
      res.status(200).json({message : "Success editing a entry"}) 
   }
   catch{
      res.status(500).json({message : "Error editing a entry"});
   }
}