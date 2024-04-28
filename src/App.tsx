import "./index.css";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="border">
      <h1 className="text-3xl font-bold">QR code gen</h1>
      <QRCode value={value} />
      <p>{value}</p>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setValue(inputValue);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
