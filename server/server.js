require(".dotenv").config()

const app = require("./src/app")
const connectToDB = require("./config/db")

app.listen(3000, () => {
    console.log("Server is running")
})