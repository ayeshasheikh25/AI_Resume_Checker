const ResumeModel = require("../model/Resume");
const mongoose = require("mongoose");
const extractPDFData = require("../services/pdfServices");
const analyzeResume = require("../services/groqAIservices");
const AnalysisModel = require("../model/Analysis");
exports.uploadResumeData = async (req, res) => {
  try {
    const id = req.user.id;
    const { originalname, filename, path } = req.file;

    const resumeText = await extractPDFData(path);

    const aiResult = await analyzeResume(resumeText);

    const userId = new mongoose.Types.ObjectId(id);

    const aiResultObj = JSON.parse(aiResult);
    const { atsScore, summary, strengths, weaknesses, suggestions } =
      aiResultObj;

    const resume = await ResumeModel.create({
      userId,
      originalName: originalname,
      fileName: filename,
      filePath: path,
      analysisStatus: "completed",
    });

    const analysesResult = await AnalysisModel.create({
      userId,
      resumeId: resume._id,
      atsScore,
      summary,
      strengths,
      weaknesses,
      suggestions,
    });

    res
      .status(201)
      .json({ success: true, message: "data saved", analysesResult, resume });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getResumeAndAnalysisData = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const ResumeData = await ResumeModel.find({
      userId: "6a5cd10b4e8da229e29f2e50",
    });

    const AnalysisData = await AnalysisModel.find({
      userId: "6a5cd10b4e8da229e29f2e50",
    });

    res.status(200).json({ ResumeData, AnalysisData });
  } catch (err) {
    res.status(500).response({ message: "Server Error" });
  }
};

exports.deteteResumeData = async (req, res) => {
  try {
    const { userId, resumeId, analysisId } = req.body;
    const resumeData = await ResumeModel.findByIdAndDelete({
      _id: resumeId,
      userId,
    });
    const analysisData = await AnalysisModel.findByIdAndDelete({
      _id: analysisId,
      resumeId,
      userId,
    });
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
