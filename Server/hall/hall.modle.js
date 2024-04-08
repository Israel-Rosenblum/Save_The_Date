const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "owners",
  },
  hallName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dates: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  hall: {
    type: Boolean,
    default: false,
  },
  eventGarden: {
    type: Boolean,
    default: false,
  },
  Mehadrin: {
    type: Boolean,
    default: false,
  },
  kosher: {
    type: Boolean,
    default: false,
  },
  elevator: {
    type: Boolean,
    default: false,
  },
  accessibility: {
    type: Boolean,
    default: false,
  },
  parking: {
    type: Boolean,
    default: false,
  },
  dairy: {
    type: Boolean,
    default: false,
  },
  fleshy: {
    type: Boolean,
    default: false,
  },
  vegan: {
    //טבעוני
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("hall", hallSchema);
