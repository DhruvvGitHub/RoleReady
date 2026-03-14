const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")

async function generateInterviewReportController(req, res) {
  try {
    const resumeBuffer = req.file?.buffer
    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(resumeBuffer))).getText()
    const { selfDescription, jobDescription } = req.body

    const interviewReportByAI = await generateInterviewReport({
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
    })

    const interviewReport = await interviewReportModel.create({
      user: req.user?.id,
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
      ...interviewReportByAI,
    })

    res.status(201).json({
      success: true,
      message: "Interview report generated successfully",
      interviewReport,
    })
  } catch (err) {
    console.error("generateInterviewReportController error", err)
    res.status(500).json({ success: false, message: "Failed to generate interview report" })
  }
}

module.exports = {generateInterviewReportController}