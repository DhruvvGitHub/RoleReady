require("dotenv").config();

const connectToDB = require("./config/db");
const app = require("./src/app");
const invokeGeminiAI = require("./services/ai.service")

// connect to MongoDB (if you have a function for it)
if (typeof connectToDB === "function") {
    connectToDB();
}

invokeGeminiAI()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});