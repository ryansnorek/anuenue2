const router = require('express').Router();
// const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { getOrderTotal, getLineItems } = require('./model');
const DOMAIN = 'http://localhost:3000'


router.post('/create-checkout-session', async (req, res) => {
  const { order } = req.body;

  const lineItems = getLineItems(order);
  console.log(lineItems);


  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${DOMAIN}/success`,
    cancel_url: `${DOMAIN}/bag`
  });
  res.redirect(303, session.url);
})

router.get('/secret', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    payment_method_types: ['card'],
  });
  res.json({client_secret: paymentIntent.client_secret});
})

  module.exports = router;