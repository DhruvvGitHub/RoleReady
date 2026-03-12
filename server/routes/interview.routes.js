const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const interviewController = require("../controllers/interview.controller")

const interviewRouter = express.Router()

module.exports = interviewRouter

interviewRouter.post("/", authMiddleware.authUser, generateInterviewReportController)