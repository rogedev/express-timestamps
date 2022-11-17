const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

const port = process.env.PORT || 3030

app.use(cors({ optionsSuccessStatus: 200 }))

app.use(express.static("src/public"))

app.get("/", (req, res) => res.send("hello world"))

app.listen(port, () => console.log(`app listening on port ${port}`))

module.exports = app
