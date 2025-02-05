import { useState, useEffect } from "react";
import Button from "./components/Button";
import Calculator from "./components/Calculator";
import Operators from "./components/Operators";

const App = () => {
  const [screen, setScreen] = useState("0");
  const [total, setTotal] = useState("0");

  let display = document.getElementById("display");
  const calculator = new Calculator(display);

  const handleClear = () => {
    setScreen(calculator.allClear());
    setTotal("0");
  };
  const handleBack = () => {
    setScreen(calculator.backSpace(screen));
  };
  const handleAppend = (value) => {
    let newVal = calculator.appendNumbers(screen, value);
    setScreen(newVal);
  };
  const handleAppendOp = (value) => {
    setScreen(calculator.appendOperator(screen, value));
    setTotal("");
  };
  const handleEqualTo = () => {
    setScreen(calculator.totalEqual(screen));
    setTotal("");
  };

  useEffect(() => {
    try {
      setTotal(eval(screen.replaceAll("x", "*"))); // Evaluates the expression
    } catch {
      // Handles invalid expressions
    }
  }, [screen]);
  return (
    <>
      <div className=" w-full h-lvh sm:w-3/4 lg:w-[500px] lg:h-4/5 lg:my-10 mx-auto sm:my-4  bg-gray-950 p-4 rounded-xl  flex flex-col justify-center ">
        <div
          className="w-full bg-gray-950 h-16 flex justify-end items-center text-white text-5xl p-3 my-6"
          id="display"
        >
          {screen}
        </div>
        <div
          className="w-full bg-gray-950 h-8 flex justify-end items-center text-4xl text-slate-400 my-4"
          id="total"
        >
          {total}
        </div>

        <div className="w-full grid grid-cols-4 grid-rows-5 gap-4  mt-4">
          <Operators label="AC" func={handleClear}></Operators>
          <Operators label="+/-" func={handleAppendOp}></Operators>
          <Operators label="C" func={handleBack}></Operators>
          <Operators label="/" func={handleAppendOp}></Operators>

          <Button label="7" func={handleAppend}></Button>
          <Button label="8" func={handleAppend}></Button>
          <Button label="9" func={handleAppend}></Button>
          <Operators label="x" func={handleAppendOp}></Operators>

          <Button label="4" func={handleAppend}></Button>
          <Button label="5" func={handleAppend}></Button>
          <Button label="6" func={handleAppend}></Button>
          <Operators label="-" func={handleAppendOp}></Operators>

          <Button label="1" func={handleAppend}></Button>
          <Button label="2" func={handleAppend}></Button>
          <Button label="3" func={handleAppend}></Button>
          <Operators label="+" func={handleAppendOp}></Operators>

          <button
            onClick={() => handleAppend("0")}
            className="bg-gray-800 py-4 px-8 rounded-full col-span-2 flex justify-center items-center text-2xl text-slate-100"
          >
            0
          </button>
          <Button label="." func={handleAppend}></Button>
          <Operators label="=" func={handleEqualTo}></Operators>
        </div>
      </div>
    </>
  );
};

export default App;
