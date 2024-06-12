const express = require("express");
const router = express.Router();
const Chat = require("./chatModel");

router.post("/chats", async (req, res) => {
  const chat = new Chat({
    id: req.body.id,
    messages: req.body.messages,
  });
  try {
    const newChat = await chat.save();
    res.status(201).json(newChat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/chats", async (req, res) => {
  try {
    const chats = await Chat.find();
    res.json(chats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/chats/:id", async (req, res) => {
  try {
    const chat = await Chat.findOne({ id: req.params.id });
    if (chat == null) {
      return res.status(404).json({ message: "Chat not found" });
    }
    res.json(chat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/chats/:id", async (req, res) => {
  try {
    const chat = await Chat.findOne({ id: req.params.id });
    if (chat == null) {
      return res.status(404).json({ message: "Chat not found" });
    }

    if (req.body.messages != null) {
      chat.messages = req.body.messages;
    }

    const updatedChat = await chat.save();
    res.json(updatedChat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/chats/:id", async (req, res) => {
  try {
    const chat = await Chat.findOne({ id: req.params.id });
    if (chat == null) {
      return res.status(404).json({ message: "Chat not found" });
    }

    await chat.remove();
    res.json({ message: "Deleted chat" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/chats/:id/messages", async (req, res) => {
  try {
    const chat = await Chat.findOne({ id: req.params.id });
    if (chat == null) {
      return res.status(404).json({ message: "Chat not found" });
    }

    const newMessage = {
      sender: req.body.sender,
      content: req.body.content,
    };

    chat.messages.push(newMessage);

    const updatedChat = await chat.save();
    res.status(201).json(updatedChat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
