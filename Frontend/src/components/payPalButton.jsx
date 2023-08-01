import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount, onSuccess }) => {
  return (
    <PayPalScriptProvider options={{ 'client-id': 'YOUR_CLIENT_ID' }}>
      <PayPalButtons
        style={{ layout: 'horizontal' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onSuccess(details); // Handle successful payment
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
