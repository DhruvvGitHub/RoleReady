require("dotenv").config();

const connectToDB = require("./config/db");
const app = require("./src/app");

// connect to MongoDB (if you have a function for it)
if (typeof connectToDB === "function") {
    connectToDB();
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});