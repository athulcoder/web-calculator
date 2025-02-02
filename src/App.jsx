import Button from "./components/Button";
import Operators from "./components/Operators";

const App = () => {
  return (
    <>
      <div className=" w-full sm:w-[350px] mx-auto my-28  bg-gray-950 p-4 rounded-xl ">
        <div className="w-full bg-gray-950 h-16 flex justify-end items-center text-white text-3xl p-2">
          12*2
        </div>
        <div className="w-full bg-gray-950 h-8 flex justify-end items-center text-xl text-slate-400">
          24
        </div>

        <div className="w-full grid grid-cols-4 grid-rows-5 gap-2 mt-2">
          <Operators label="AC" className></Operators>
          <Operators label="+/-"></Operators>
          <Operators label="%"></Operators>
          <Operators label="/"></Operators>

          <Button label="7"></Button>
          <Button label="8"></Button>
          <Button label="9"></Button>
          <Operators label="x"></Operators>

          <Button label="4"></Button>
          <Button label="5"></Button>
          <Button label="6"></Button>
          <Operators label="-"></Operators>

          <Button label="1"></Button>
          <Button label="2"></Button>
          <Button label="3"></Button>
          <Operators label="+"></Operators>

          <Button label="00"></Button>
          <Button label="0"></Button>
          <Button label="."></Button>
          <Operators label="="></Operators>
        </div>
      </div>
    </>
  );
};

export default App;
