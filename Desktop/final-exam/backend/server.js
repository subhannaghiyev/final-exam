const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
// https://preview.colorlib.com/theme/drimo/drimo/img/logo-6.png

const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL , {useNewUrlParser : true})

const { Schema } = mongoose;

const Drimo = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const DrimoSite = mongoose.model("drimo", Drimo);

app.get("/drimo", async (req, res) => {
  try {
    const drimo = await DrimoSite.find({});
    res.send(drimo);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
app.post("/drimo", async (req, res) => {
  try {
    const drimo = req.body;
    const drimoSave = new DrimoSite(drimo);
    drimoSave.save();
    res.send(drimoSave);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
app.get("/drimo/:id", async (req, res) => {
  try {
    const drimoId = req.params.id;
    const drimo = await DrimoSite.findById(drimoId);
    res.send(drimo);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
app.delete("/drimo/:id", async (req, res) => {
  try {
    const drimoId = req.params.id;
    const drimo = await DrimoSite.findByIdAndDelete(drimoId);
    res.send(drimo);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

PORT = process.env.PORT
app.listen(PORT , ()=>{
    console.log(`Server is uo pn PORT : ${PORT}`);
})