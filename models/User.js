import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const submissionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},);


export default mongoose.models.Submission || model('Submission', submissionSchema);