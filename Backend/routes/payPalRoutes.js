const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

router.post('/api/payment/paypal', async (req, res) => {
  try {
    const { amount } = req.body;

    // Create a PayPal payment order
    const response = await axios.post(
      'https://api.sandbox.paypal.com/v2/checkout/orders',
      {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: amount,
            },
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`, // Replace with your PayPal Access Token
        },
      }
    );

    // Return the PayPal order ID to the frontend
    return res.json({ orderId: response.data.id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
