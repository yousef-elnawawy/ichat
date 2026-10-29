import mongoose from "mongoose";

const massageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    text: {
        type: String,
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    }
}, { timestamps: true });

const Massage = mongoose.model("Massage", massageSchema);

export default Massage;