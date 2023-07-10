import express from "express"
const router = express.Router()

router.route("/").get((req, res) => {
    res.send(`Hello from ${req.baseUrl}`)
})

router.get("/room")


export { router } 