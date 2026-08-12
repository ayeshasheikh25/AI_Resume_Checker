const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    originalName:{
        type: String,
        required:true,
        trim: true
    },
    fileName:{
        type:String,
        required: true,
        trim: true
    },
    filePath: {
        type: String,
        required:true,
        trim: true
    },
    analysisStatus:{
        type:String,
        enum: ["pending", "completed"],
        default: "pending" 
    }
}, {timestamps: true})

const ResumeModel = mongoose.model('Resume', ResumeSchema)
module.exports = ResumeModel