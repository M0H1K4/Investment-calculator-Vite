import React from "react";
import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header>
      <img  src={logo} />
      <h1>Invenstment Calculator</h1>
    </header>
  );
}
