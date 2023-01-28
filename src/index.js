require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./config/db");
const userRouter = require("./routes/user/user.router");
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use("/user", userRouter);


app.get("/", async (req, res) => {
    res.status(200).send("successfully!");
});
  
app.listen(PORT, async () => {
  await connect();
  console.log("server started on 8080");
});
  
