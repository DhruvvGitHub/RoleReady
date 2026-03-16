const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")
const { intersection } = require("zod")

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
      resume: resumeContent.text,
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
    res.status(500).json({ success: false, message: "Failed to generate interview report" })
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
            message: "Interview report fetched successfully"
        })
}


async function getAllInterviewReports(req, res) {

    const interviewReports = await interviewReportModel.findOne({user: req.user.id}).sort({createdAt: -1}).select("-resume -selfDescription -jobDescription -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

    return res.status(200).json({
            success: true,
            message: "Interview reports fetched successfully"
        })
}

module.exports = {generateInterviewReportController, generateInterviewReportByID, getAllInterviewReports}