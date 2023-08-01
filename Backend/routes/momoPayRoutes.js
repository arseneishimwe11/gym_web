const express = require('express');
const axios = require('axios');
const router = express.Router()

router.post('/api/payment/momo', async (req, res) => {
    try {
        const clientId = 'YOUR_MOMO_API_CLIENT_ID';
        const clientSecret = 'YOUR_MOMO_API_CLIENT_SECRET';
        const subscriptionKey = '1fde5630b5f14150b9101dac45ce0fcc';
        const callbackUrl = 'http://your-website.com/api/momo/callback';

        // Data received from the frontend
        const { phoneNumber, amount } = req.body;
        console.log(req.body);   
        // Call the MoMo API to initiate payment
        const momoResponse = await axios.post(
            'https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay',
            {
                amount,
                currency: 'EUR',
                externalId: '123456', // Replace with your unique transaction ID
                payer: {
                    partyIdType: 'MSISDN',
                    partyId: phoneNumber,
                },
                payerMessage: 'Payment for your package',
                payeeNote: 'Package payment',
            },
            {
                headers: {
                    'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
                    'Ocp-Apim-Subscription-Key': subscriptionKey,
                    'X-Reference-Id': '123456', // Replace with your unique reference ID
                },
            }
        );

        // Return the MoMo API response to the frontend
        return res.json(momoResponse.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;