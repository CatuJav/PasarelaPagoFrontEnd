import React, { useState } from "react";
import { Kushki } from "@kushki/js";

export const Tarjeta = () => {
    const [nombre, setNombre] = useState("");
    const [numero, setNumero] = useState("");
    const [cvv, setCvv] = useState("");
    const [exMes, setExMes] = useState("");
    const [exAnio, setExAnio] = useState("");
  
    const kushki = new Kushki({
      merchantId: "21e8ab07a6184225bd237823d2b07cb7", // Your public merchant id
      inTestEnvironment: true,
    });
  
    const token = (e: any) => {
      kushki.requestToken(
        {
          amount: "49.99",
          currency: "USD",
          card: {
            name: nombre,
            number: numero,
            cvc: cvv,
            expiryMonth: exMes,
            expiryYear: exAnio,
          },
        },
  
        (response: any) => {
          console.log(response);
          // Submit your code to your back-end
        }
      );
      e.preventDefault();
    };
  
    return (
      <div>
        <form id="payment-form" onSubmit={(e) => token(e)}>
          <input
            placeholder="Card Number"
            type="text"
            name="number"
            onChange={(e) => setNumero(e.target.value)}
          />
          <input
            placeholder="Full Name"
            type="text"
            name="name"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            placeholder="MM"
            type="text"
            name="expiry_month"
            onChange={(e) => setExMes(e.target.value)}
          />
          <input
            placeholder="YY"
            type="text"
            name="expiry_uear"
            onChange={(e) => setExAnio(e.target.value)}
          />
          <input
            placeholder="CVC"
            type="text"
            name="cvc"
            onChange={(e) => setCvv(e.target.value)}
          />
  
          <button id="submit">Pay $49.99</button>
        </form>
      </div>
    );
}
