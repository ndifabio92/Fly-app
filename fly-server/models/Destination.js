import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    destination: String
});

export default mongoose.model('Destination', schema);