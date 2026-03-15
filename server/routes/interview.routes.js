const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const { generateInterviewReportController, getAllInterviewReports } = require("../controllers/interview.controller")
const upload = require("../middlewares/file.middleware")

const interviewRouter = express.Router()

interviewRouter.post("/",authMiddleware.authUser,upload.single("resume"),generateInterviewReportController,
)

interviewRouter.get("/report/:interviewId", authMiddleware.authUser, generateInterviewReportController)


interviewRouter.get("/report/:interviewId", authMiddleware.authUser, getAllInterviewReports)

module.exports = interviewRouter