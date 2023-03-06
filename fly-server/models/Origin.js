import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    origin: String
});

export default mongoose.model('Origin', schema);