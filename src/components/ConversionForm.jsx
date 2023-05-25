import { useState, useEffect } from "react";
import axios from "axios";

function ConversionForm() {
  const [convertFromCurrency, setConvertFromCurrency] = useState("");
  const [convertToCurrencyOne, setConvertToCurrencyOne] = useState("");
  const [convertToCurrencyTwo, setConvertToCurrencyTwo] = useState("");

  const [convertFromInput, setConvertFromInput] = useState(0);
  const [convertToInputOne, setConvertToInputOne] = useState(0);
  const [convertToInputTwo, setConvertToInputTwo] = useState(0);

  const [currencies, setCurrencies] = useState([
    "USD",
    "CAD",
    "PKR",
    "EUR",
    "GBP",
    "SAR",
    "AED",
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const resOne = await axios.get(
      `https://v6.exchangerate-api.com/v6/a57b26e21bec5a3a2b86fbba/pair/${convertFromCurrency}/${convertToCurrencyOne}/${convertFromInput}`
    );

    const resTwo = await axios.get(
      `https://v6.exchangerate-api.com/v6/a57b26e21bec5a3a2b86fbba/pair/${convertFromCurrency}/${convertToCurrencyTwo}/${convertFromInput}`
    );

    setConvertToInputOne(resOne.data.conversion_result);

    setConvertToInputTwo(resTwo.data.conversion_result);
  };

  return (
    <div className="mt-4">
      <form
        onSubmit={onSubmit}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="d-flex flex-column">
          <select
            value={convertFromCurrency}
            onChange={(e) => setConvertFromCurrency(e.target.value)}
            name=""
            id=""
          >
            <option>Select</option>
            {currencies.map((currency, index) => (
              <option value={currency} key={index}>
                {currency}
              </option>
            ))}
          </select>
          <label htmlFor="">Add Currency you want to convert</label>
          <input
            value={convertFromInput}
            onChange={(e) => setConvertFromInput(e.target.value)}
            type="number"
          />
        </div>
        <div className="d-flex mt-3">
          <div className="w-50 d-flex flex-column">
            <select
              value={convertToCurrencyOne}
              onChange={(e) => setConvertToCurrencyOne(e.target.value)}
              name=""
              id=""
            >
              <option>Select</option>
              {currencies.map((currency, index) => (
                <option value={currency} key={index}>
                  {currency}
                </option>
              ))}
            </select>

            <label htmlFor="">Add Currency you want to convert to</label>
            <input
              value={convertToInputOne}
              onChange={(e) => setConvertToInputOne(e.target.value)}
              type="number"
            />
          </div>
          <div className="w-50 d-flex flex-column mx-5">
            <select
              value={convertToCurrencyTwo}
              onChange={(e) => setConvertToCurrencyTwo(e.target.value)}
              name=""
              id=""
            >
              <option>Select</option>
              {currencies.map((currency, index) => (
                <option value={currency} key={index}>
                  {currency}
                </option>
              ))}
            </select>
            <label htmlFor="">Add Currency you want to convert to</label>
            <input
              value={convertToInputTwo}
              onChange={(e) => setConvertToInputTwo(e.target.value)}
              type="number"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Convert
        </button>
      </form>
    </div>
  );
}

export default ConversionForm;
