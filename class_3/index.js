const express = require("express");
const productRouter = require("./routes/prductRoutes");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");

const app = express();
connectDB(); 

app.use(express.json())

// routes
app.use("/api/products", productRouter);
app.use("/api/users",userRouter);

// global error 
app.use((err, req, res) => {
  console.log(typeof(res.status))
  console.log(err);
  return res.status(500).json({message: "Internal server error"})
})

app.listen(3000, () => {
  console.log("Server started at port 3000");
});