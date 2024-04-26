const mongoose = require("mongoose");
const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
   default:'tarana',
  },
      TimeAt: {
        type: Date,
        default: Date.now(),
      }
   
});

const candidate = mongoose.model("candidate", candidateSchema);
module.exports = candidate;
