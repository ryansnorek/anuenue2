const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const { getOrderTotal, getOrderItems } = require("./model");

router.post("/charge", async (req, res) => {
    const { id, order } = req.body;
    const orderItems = getOrderItems(order);
    const total = getOrderTotal(order);

    try {
      const payment = await stripe.paymentIntents.create({
        amount: total,
        currency: "USD",
        description: "Anuenue",
        payment_method: id,
        confirm: true,
      });
      console.log(payment);
      res.json({
        message: "Payment Successful",
        success: true,
        items: orderItems
      });
    } catch (err) {
      res.json({
        message: "Payment Failed",
        success: false,
      })
    }
  })

  module.exports = router;