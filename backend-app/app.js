const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const ProductModel = require("./model/product");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("It is running");
});

app.post("/products", async (req, res) => {
  try {
    const result = await ProductModel.create(req.body)
    res.send({status:"success"});
  } catch (error) {
    res.send({status:'error',message:error.message})
  }
});

app.get('/products', async(req,res)=>{
  try {
    const products = await ProductModel.find({})
    res.send({status:"success", data:products})
  } catch (error) {
    res.send({status:'error',message:error.message})
  }
})

mongoose.connect(process.env.connectionString).then(() => {
  app.listen(3004);
  console.log("Server connected");
});
