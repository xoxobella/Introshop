/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const CurrencySelector = ({ currencies, selectedCurrency, onCurrencyChange }) => {
  return (
    <div className="hidden lg:ml-8 lg:flex">
      {currencies.map((currency) => (
        <a
          key={currency.code}
          href="#"
          className="flex items-center text-gray-700 hover:text-gray-800"
          onClick={(e) => {
            e.preventDefault();
            onCurrencyChange(currency.code);
          }}
        >
          <img
            alt={`${currency.name} flag`}
            src={currency.flag}
            className="block h-auto w-5 shrink-0"
          />
          <span className="ml-3 block text-sm font-medium">{currency.code}</span>
        </a>
      ))}
    </div>
  );
};

export default CurrencySelector;
