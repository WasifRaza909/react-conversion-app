import { useState, useEffect } from "react";
import axios from "axios";

function ConversionForm() {
  const [convertFromCurrency, setConvertFromCurrency] = useState("USD");
  const [convertToCurrencyOne, setConvertToCurrencyOne] = useState("USD");
  const [convertToCurrencyTwo, setConvertToCurrencyTwo] = useState("USD");

  const [convertFromInput, setConvertFromInput] = useState();
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
          <label className="" htmlFor="">
            Select currency you want to convert from
          </label>

          <select
            value={convertFromCurrency}
            onChange={(e) => setConvertFromCurrency(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option>Select</option>
            {currencies.map((currency, index) => (
              <option value={currency} key={index}>
                {currency}
              </option>
            ))}
          </select>
          <input
            className="mt-2 form-control"
            placeholder="Type amount..."
            value={convertFromInput}
            onChange={(e) => setConvertFromInput(e.target.value)}
            type="number"
            required
            min="1"
            step="any"
          />
        </div>
        <div className="d-flex mt-3 ">
          <div className="w-50 d-flex flex-column">
            {/* <label className="" htmlFor="">Select currency you want to convert to</label>
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
            </select> */}
            <label className="" htmlFor="">
              Select currency you want to convert to
            </label>
            <select
              value={convertToCurrencyOne}
              onChange={(e) => setConvertToCurrencyOne(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Select</option>
              {currencies.map((currency, index) => (
                <option value={currency} key={index}>
                  {currency}
                </option>
              ))}
            </select>

            <div className="form-control  mt-2">{convertToInputOne}</div>
          </div>
          <div className="w-50 d-flex flex-column mx-5">
            <label className="" htmlFor="">
              Select currency you want to convert to
            </label>
            <select
              value={convertToCurrencyTwo}
              onChange={(e) => setConvertToCurrencyTwo(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Select</option>
              {currencies.map((currency, index) => (
                <option value={currency} key={index}>
                  {currency}
                </option>
              ))}
            </select>
            <div className="form-control mt-2">{convertToInputTwo}</div>
          </div>
        </div>
        <button type="submit" className="">
          Convert
        </button>
      </form>
    </div>
  );
}

export default ConversionForm;
