require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 8000;
const cors = require("cors");
const bodyParser = require("body-parser");
const stripeRouter = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({ origin: ["http://localhost:3000", "https://anuenue.herokuapp.com"] })
);

app.use("/stripe", stripeRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
