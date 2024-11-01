const mongoose = require("./db");

const messageSchema = new mongoose.Schema({
  sender: String,
  content: String,
});

const chatSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    messages: [messageSchema],
  },
  { collection: "chat" }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
