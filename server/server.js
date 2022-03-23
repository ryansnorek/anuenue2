require("dotenv").config();

const storeItems = require("./storeItems");

const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors({
  origin: "http://localhost:3001"
}))

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY || 1234);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name
            },
            unit_amount: item.price
          },
          quantity: item.qty
        }
      }),
      success_url: `${process.env.SERVER_URL}/success.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`
    })
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(3000);

