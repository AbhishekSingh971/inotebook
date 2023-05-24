// this is for import from mongoose
const mongoose = require('mongoose');
// this is also for import from mongoose
// import mongoose from 'mongoose';
const { Schema } = mongoose


const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default: 'General'
    },
    date:{
        type: Date,
        default: Date.now
    }
})

//this is for export
module.exports = mongoose.model('notes',NotesSchema);
//another way
// export default mongoose.model('notes', NotesSchema)