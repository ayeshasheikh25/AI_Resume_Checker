const express = require('express')
const ResumeRoutes = express.Router()
const resumeController = require('../controller/resumeController')
const auth = require('../middleware/authMiddleware')
const upload = require('../middleware/uploadMiddleware')

ResumeRoutes.post('/upload', auth , upload.single('resume'), resumeController.uploadResumeData)
ResumeRoutes.get('/upload/:id', auth , resumeController.getResumeAndAnalysisData)
ResumeRoutes.delete('/upload/delete', auth, resumeController.deteteResumeData )
module.exports = ResumeRoutes