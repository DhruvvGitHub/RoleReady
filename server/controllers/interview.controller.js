const pdfParse = require("pdf-parse")
const {
  generateInterviewReport,
  generateResumeHtml,
} = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")
const { intersection } = require("zod")

async function generateInterviewReportController(req, res) {
  try {
    const resumeBuffer = req.file?.buffer

    if (!resumeBuffer) {
      return res
        .status(400)
        .json({ success: false, message: "Resume file is required" })
    }

    const parsedResume = await pdfParse(resumeBuffer)
    const resumeText = parsedResume?.text?.trim() || ""

    if (!resumeText) {
      return res
        .status(400)
        .json({ success: false, message: "Unable to extract text from resume PDF" })
    }

    const { selfDescription, jobDescription } = req.body

    const interviewReportByAI = await generateInterviewReport({
      resume: resumeText,
      selfDescription,
      jobDescription,
    })

    const normalizedPreparationPlan = Array.isArray(
      interviewReportByAI.preparationPlan,
    )
      ? interviewReportByAI.preparationPlan.map((item) => {
          const baseDay = item?.day
          const baseFocus = item?.focus
          const tasksArray = Array.isArray(item?.tasks)
            ? item.tasks
            : item?.task
            ? [item.task]
            : []

          return {
            day: baseDay,
            focus: baseFocus,
            tasks: tasksArray,
          }
        })
      : []

    const interviewReport = await interviewReportModel.create({
      user: req.user?.id,
      resume: resumeText,
      selfDescription,
      jobDescription,
      ...interviewReportByAI,
      preparationPlan: normalizedPreparationPlan,
    })

    res.status(201).json({
      success: true,
      message: "Interview report generated successfully",
      interviewReport,
    })
  } catch (err) {
    console.error("generateInterviewReportController error", err)
    res.status(500).json({
      success: false,
      message: "Failed to generate interview report",
      error: err.message || "unknown",
    })
  }
}

async function generateInterviewReportByID(req, res) {
    const {interviewId} = req.params;

    const interviewReport = await interviewReportModel.findOne({_id: interviewId, user:req.user.id})

    if(!interviewReport) {
        return res.status(404).json({
            success: false,
            message: "Interview report not found"
        })
    }

    return res.status(200).json({
      success: true,
      message: "Interview report fetched successfully",
      interviewReport,
    })
}


async function getAllInterviewReports(req, res) {

    const interviewReports = await interviewReportModel
      .find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .select("-resume -selfDescription -jobDescription")

    return res.status(200).json({
      success: true,
      message: "Interview reports fetched successfully",
      interviewReports,
    })
}

async function generateResumeHtmlDownload(req, res) {
  try {
    const { interviewReportId } = req.params

    const interviewReport = await interviewReportModel.findOne({
      _id: interviewReportId,
      user: req.user?.id,
    })

    if (!interviewReport) {
      return res.status(404).json({
        success: false,
        message: "Interview report not found",
      })
    }

    const { resume, selfDescription, jobDescription } = interviewReport

    const htmlContent = await generateResumeHtml({
      resume,
      selfDescription,
      jobDescription,
    })

    res.set({
      "Content-Type": "text/html",
      "Content-Disposition": `attachment; filename=resume_${interviewReportId}.html`,
      "Content-Length": Buffer.byteLength(htmlContent, 'utf8'),
    })

    return res.status(200).send(htmlContent)
  } catch (err) {
    console.error("generateResumeHtmlDownload error", err)
    return res
      .status(500)
      .json({ success: false, message: "Failed to generate resume HTML" })
  }
}

module.exports = {generateInterviewReportController, generateInterviewReportByID, getAllInterviewReports, generateResumeHtmlDownload}