const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/pokemon/release/:number", (req, res) => {
    if(req.params.number == 0 || req.params.number == 1) return res.send("You Fail Release Your Pokemon!");
    if (req.params.number == 2) return res.send("You Success Release Your Pokemon!");
    for (var i = 2; i < req.params.number; i++) {
      if (req.params.number % i == 0) {
        return res.send("You Fail Release Your Pokemon!");
      }
    }
    return res.send("You Success Release Your Pokemon!");
  
});

app.post("/pokemon/catch", (req, res) => {
    const name = req.body.name
    const image_id = req.body.image_id;
    x = Math.floor(Math.random() * 2) == 0;
    if (x) {
        res.send({
            is_catch : 1,
            name : name, 
            image_id : image_id,
            result :"Yeay You Catch " + name});
    } else {
      res.send(
            {is_catch : 0, 
            result :"Oh No He Got Away!"});
    }
});

app.post("/pokemon/:name", (req, res) => {
    let arr = [0,1];
    for (let i = 2; i < req.body.number; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    res.send({
      name: req.body.rename + " " + req.params.name + "-" + arr[0],
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
