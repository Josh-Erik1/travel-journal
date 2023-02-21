import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import data from "./data/Data";
import Card from "./components/Card";

function App() {
  const Cards = data.map((item) => {
    return <Card key={item.key} item={item} />;
  });

  return (
    <div className="max-w-[px] bg-slate-300 items-center justify-center">
      <Header />
      {Cards}
    </div>
  );
}

export default App;
