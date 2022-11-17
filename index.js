const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const getTimeStamp = require("./services/getTimeStamp")

dotenv.config()

const app = express()

const port = process.env.PORT || 3030

app.use(cors({ optionsSuccessStatus: 200 }))

app.use(express.static("public"))

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"))

app.get("/api/:date", (req, res) => res.send(getTimeStamp(req.params.date)))

app.listen(port, () => console.log(`app listening on port ${port}`))

module.exports = app
