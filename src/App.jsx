import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const [h1color, seth1Color] = useState("white");
  return (
    <>
      <div
        className="w-screen h-screen font-mono box-border flex justify-center"
        style={{ backgroundColor: color }}
      >
        <h1 className="m-20 text-3xl" style={{ color: h1color }}>
          Background Changer
        </h1>
        <div className="flex fixed bottom-10 justify-center bg-gray-500 w-2/4 flex-wrap rounded-xl px-4 py-4 m-auto">
          <button
            className="rounded-lg px-3 py-2 mx-6 my-3 border-white font-bold text-black"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
              seth1Color("black");
            }}
          >
            Red
          </button>
          <button
            className="rounded-lg px-3 py-2 mx-6 my-3 border-white font-bold text-black"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
              seth1Color("white");
            }}
          >
            Blue
          </button>
          <button
            className="rounded-lg px-3 py-2 mx-6 my-3  border-white font-bold text-black"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
              seth1Color("white");
            }}
          >
            Green
          </button>
          <button
            className="rounded-lg px-3 py-2 mx-6 my-3  border-white font-bold text-black"
            style={{ backgroundColor: "gray" }}
            onClick={() => {
              setColor("gray");
              seth1Color("white");
            }}
          >
            Gray
          </button>
          <button
            className="rounded-lg px-3 py-2 mx-6 my-3  border-white font-bold text-black"
            style={{ backgroundColor: "yellow" }}
            onClick={() => {
              setColor("yellow");
              seth1Color("black");
            }}
          >
            Yellow
          </button>
          <button
            className="rounded-lg px-3 py-2 mx-6 my-3  border-white font-bold text-black"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
