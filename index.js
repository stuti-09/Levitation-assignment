const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authJwt = require('./helpers/jwt');
const multer = require("multer")
const path = require("path")

dotenv.config()

const authRoute = require("./routes/auth")
const Userroute = require("./routes/user")
const Postroute = require("./routes/posts")

app.use(express.json())
app.use(authJwt())

app.use("/images", express.static(path.join(__dirname, "/images")))
const storage = multer.diskStorage({
    destination: (req, file, callb) => {
      callb(null, "images")
    },
    filename: (req, file, callb) => {
      //callb(null, "file.png")
      callb(null, req.body.name)
    },
  })
  const upload = multer({ storage: storage })
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
  })

app.use("/auth", authRoute)
app.use("/user", Userroute)
app.use("/post", Postroute)



mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

  app.listen("5000", () => {
    console.log("backend running...")
  })