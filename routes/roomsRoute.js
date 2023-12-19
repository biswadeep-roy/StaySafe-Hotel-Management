const express = require("express");
const router = express.Router();
const Room = require("../models/room");

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.json(rooms);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.post("/getroombyid", async (req, res) => {
  const roomid = req.body.roomid;
  try {
    const room = await Room.findOne({ _id: roomid });
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
