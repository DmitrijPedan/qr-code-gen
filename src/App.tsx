import "./index.css";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import {
  QrCodeIcon,
  PlusIcon,
  ArrowDownTrayIcon,
  BackspaceIcon,
} from "@heroicons/react/16/solid";
import classNames from "classnames";

function App() {
  const [value, setValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [label, setLabel] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue(inputValue);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <header className="bg-white p-2 w-full sticky top-0 flex text-slate-900">
        <div className="container px-2 mx-auto">
          <nav className="flex justify-between">
            <div className="flex items-center">
              <QrCodeIcon className="h-8 w-8 text-green-500 mr-2" />
              <h1 className="font-bold">QR code generator</h1>
            </div>
          </nav>
        </div>
      </header>
      <div className="container px-2 py-8 mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col space-y-4 justify-center mb-12">
          <div className="flex flex-col items-center justify-center  border p-2 sm:p-3 md:p-4 rounded-lg bg-white">
            <div className="w-52 flex justify-center items-center sm:w-64 h-52 sm:h-64">
              {value ? (
                <QRCode value={value} className="w-full h-full" />
              ) : (
                <p className="text-sm text-slate-600 text-center">
                  Please, provide your value in the form below
                </p>
              )}
            </div>
            {label && <p className="mt-4">{label}</p>}
          </div>
          <div className="text-slate-400 text-sm">
            <p>Your QR code will open this value:</p>
            <p className="italic">
              {value ? (
                <span className="text-white">"{value}"</span>
              ) : (
                <span className="">not provided</span>
              )}
            </p>
          </div>
          <div className="text-center">
            <button
              className={classNames(
                "p-2 bg-green-500 text-white disabled:bg-slate-600 disabled:cursor-not-allowed"
              )}
              disabled={!value}
            >
              <ArrowDownTrayIcon className="h-6 w-6 inline-block mr-2" />
              <span>Download PNG</span>
            </button>
          </div>
        </div>

        <div className="w-full max-w-xl">
          <form onSubmit={onSubmit} className="flex flex-col">
            <div>
              <label className="block" htmlFor="qrValue">
                Please, provide your value:
              </label>
              <div className="relative mb-2">
                <button
                  title="Clear input"
                  type="button"
                  className="absolute top-1/2 right-1 -translate-y-1/2"
                  onClick={() => {
                    setInputValue("");
                    setValue("");
                  }}
                >
                  <BackspaceIcon className="h-6 w-6 text-gray-200 hover:text-orange-500 transition-colors" />
                </button>
                <input
                  id="qrValue"
                  type="text"
                  value={inputValue}
                  className="py-2 px-3 w-full pr-10 text-slate-900"
                  placeholder="Enter your value here..."
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-center mt-2 py-1 px-4 bg-green-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={!inputValue}
            >
              <span>
                <PlusIcon className="h-4 w-4 mr-1 inline-block" />
              </span>
              Generate QR code
              <span></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
