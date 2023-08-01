import React, { useState } from 'react';
import Logo from "../../src/assets/white logo.png";
import tool from "../../src/assets/tool.png";
import axios from 'axios';
import PayPalButton from '../../src/components/payPalButton';

const PaymentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend URL
      const backendUrl = 'http://localhost:3000/api/payment/paypal';

      // Send payment details to the backend to create the PayPal order
      const response = await axios.post(backendUrl, { amount }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Get the PayPal order ID from the response
      const { orderId } = response.data;

      // After getting the order ID, set the PayPal button to be displayed
      setPaymentSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle successful payment
  const handlePaymentSuccess = (details) => {
    console.log(details);
    // You can handle the successful payment here, e.g., show a success message or update the order status
  };

  return (
    <div className='flex'>
         <div className="bg-landing-bg w-[40%] h-screen">
        <img
          src={tool}
          alt="Gym tool"
          className="rounded-[50%] w-[12%] h-[55px] relative top-[15px] left-[420px]"
        />
        <img
          src={Logo}
          alt="Platinum Gym Logo"
          className="w-[60%] relative top-[60px] left-[90px]"
        />
        <p className="mt-12">
          <span className="uppercase text-[38px] text-white font-fugaz pl-10">
            Build your
          </span>
          <span className="uppercase text-[35px] font-bold font-fugaz empower-txt text-transparent relative top-12 left-[-50px] w-[100vw]">
            dream body
          </span>
        </p>
        <img
          src={tool}
          alt="Gym tool"
          className="rounded-[50%] w-[12%] h-[55px] relative top-[110px] left-[30px]"
        />
      </div>
        {paymentSuccess ? (
          <div>
            <h3>Payment Success!</h3>
            {/* Display a success message or redirect to a success page */}
          </div>
        ) : (
          <PayPalButton amount={amount} onSuccess={handlePaymentSuccess} />
        )}
    </div>
  );
};

export default PaymentForm;
