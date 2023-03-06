import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    origin: String,
    destination: String,
    price: Number,
    availability: Number,
    data: String
});

export default mongoose.model('Flight', schema);