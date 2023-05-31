import ConversionForm from "./components/ConversionForm";

function App() {
  return (
    <div className="app bg-light">
      <div className="container bg">
        <h1 className="fw-bold">Currency Converter App</h1>

        <ConversionForm />
      </div>
    </div>
  );
}

export default App;
