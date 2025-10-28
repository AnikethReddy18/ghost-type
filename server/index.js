import robot from "robotjs"
import express, { urlencoded } from "express"
import cors from "cors"

import os from "os"
import dns from "dns"

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

app.listen(PORT, "0.0.0.0",console.log("Server running on http://localhost:" + PORT),
    dns.lookup(os.hostname(), { family: 4 }, (err, add)=>console.log("Your IP: "+add))
)