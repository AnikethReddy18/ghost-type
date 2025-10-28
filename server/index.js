import robot from "robotjs"
import express, { urlencoded } from "express"
import cors from "cors"

const app = express()
const PORT = 3000

app.use(urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => res.send("Hello World!"))
app.post("/type", (req, res) => {
    robot.typeString(req.body.text)
    res.send(200)
}
)

app.listen(PORT, console.log("Server running on http://localhost:" + PORT))