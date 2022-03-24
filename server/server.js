require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 8000;
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const storeItems = require("./storeItems");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(express.static(`${__dirname}/public`));

app.post("/stripe/charge", cors(), async (req, res) => {
  const { id } = req.body;
  // get amount from storeItems
  const amount = 100;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Anuenue",
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (err) {
    res.json({
      message: "Payment Failed",
      success: false,
    })
  }
})

app.listen(port, () => {
  console.log(`Server on ${port}`)
});


