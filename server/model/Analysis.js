const mongoose = require('mongoose')

const AnalysisSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true  
    },
    resumeId:{
        type: mongoose.Types.ObjectId,
        ref: "Resume",
        required: true,
    },
    atsScore: {
        type: Number,
        required: true,
    },
    summary: {
        type: String,
        required: true,
        trim: true,
    },
    strengths: {
        type: [String],
        required: true,
    },
    weaknesses:{
        type: [String],
        required: true,
    },
    suggestions:{
        type:[String],
        required: true,
    }
},{timestamps: true})

const AnalysisModel = mongoose.model('Analyses', AnalysisSchema)
module.exports = AnalysisModel