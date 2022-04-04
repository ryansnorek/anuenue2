const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const { getOrderTotal, getLineItems } = require('./model');

router.post('/create-payment-intent', async (req, res) => {
  const { order } = req.body;
  const lineItems = getLineItems(order);
  const total = getOrderTotal(lineItems);
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
    payment_method_types: ['card'],
  });
  res.json({client_secret: paymentIntent.client_secret});
})

  module.exports = router;