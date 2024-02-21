import connectToDB from "@/configs/db";
import messageModel from "@/models/message";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }

  try {
    connectToDB();

    const { name, email, message } = req.body;

    if (!name.trim().length || !email.trim().length || !message.trim().length) {
      return res.status(409).json({ message: "data is not valid" });
    }

    if (name.trim().length < 4 || !email.trim().length < 8 || !message.trim().length < 4) {
      return res.status(409).json({ message: "data is not valid" });
    }

    const newMessage = messageModel.create({ name, email, message });

    if (newMessage) {
      return res.status(201).json({ message: "send message successfully" });
    } else {
      return res.status(500).json({ message: "server error" });
    }
  } catch (err) {
    return res.status(509).json({ message: "unknown error" });
  }
};

export default handler;
