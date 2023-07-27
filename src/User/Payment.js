import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const { amount } = useParams();
  console.log(amount);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the payment details using a payment gateway or API
    // For this example, we will just show an alert with the payment details
    alert(`Payment successful!
      Amount: ₹${amount}
      Card Number: ${paymentInfo.cardNumber}
      Card Holder: ${paymentInfo.cardHolder}
      Expiry Date: ${paymentInfo.expiryDate}
      CVV: ${paymentInfo.cvv}
      Address Line 1: ${paymentInfo.addressLine1}
      Address Line 2: ${paymentInfo.addressLine2}
      City: ${paymentInfo.city}
      State: ${paymentInfo.state}
      Zip Code: ${paymentInfo.zipCode}`);
  };
 
  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Card Holder:
          <input
            type="text"
            name="cardHolder"
            value={paymentInfo.cardHolder}
            onChange={handleChange}
            required
          />
        </label>
        <div className="flex-row">
          <label>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={paymentInfo.expiryDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={paymentInfo.cvv}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label>
          Address Line 1:
          <input
            type="text"
            name="addressLine1"
            value={paymentInfo.addressLine1}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address Line 2:
          <input
            type="text"
            name="addressLine2"
            value={paymentInfo.addressLine2}
            onChange={handleChange}
          />
        </label>
        <div className="flex-row">
          <label>
            City:
            <input
              type="text"
              name="city"
              value={paymentInfo.city}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={paymentInfo.state}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Zip Code:
            <input
              type="text"
              name="zipCode"
              value={paymentInfo.zipCode}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit{amount}</button>
      </form>
    </div>
  );
}

export default Payment;



































































































































































































// import React from 'react'
// import { useParams } from 'react-router-dom'


// function Payment() {
//   const {id} = useParams()
//   return (
//     <div>
//       {id}
//     </div>
//   )
// }

// export default Payment

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './Payment.css';

// function Payment() {
//   const { amount } = useParams();
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     cardHolder: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentInfo({ ...paymentInfo, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you can handle the payment details using a payment gateway or API
//     // For this example, we will just show an alert with the payment details
//     alert(`Payment successful!
//       Amount: ₹${amount}
//       Card Number: ${paymentInfo.cardNumber}
//       Card Holder: ${paymentInfo.cardHolder}
//       Expiry Date: ${paymentInfo.expiryDate}
//       CVV: ${paymentInfo.cvv}`);
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment</h2>
//       <form className="payment-form" onSubmit={handleSubmit}>
//         <label>
//           Card Number:
//           <input
//             type="text"
//             name="cardNumber"
//             value={paymentInfo.cardNumber}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Card Holder:
//           <input
//             type="text"
//             name="cardHolder"
//             value={paymentInfo.cardHolder}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <div className="flex-row">
//           <label>
//             Expiry Date:
//             <input
//               type="text"
//               name="expiryDate"
//               value={paymentInfo.expiryDate}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             CVV:
//             <input
//               type="text"
//               name="cvv"
//               value={paymentInfo.cvv}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <button type="submit">Pay ₹{amount}</button>
//       </form>
//     </div>
//   );
// }

// export default Payment;
