import "./App.css";
import React, { useState } from "react";
import { items } from "./itemList";
   //asjfdasjifhnisadhansdo

export default function App() {
  const [display, setDisplay] = useState(items);

  const gearData = display.filter((preGear) => preGear.isWorn);

  const  key = "slot";

  const final = [
    ...new Map(gearData.map((item) => [item[key], item])).values()
  ];
  const displayGear = final.map((premap) => (
    <div key={premap.id}> {premap.name}</div>
  ));
  let sumOfDamage = final.reduce((a, c) => a + c.damage, 0);

  let sumOfDefense = final.reduce((a, c) => a + c.defense, 0);

  function handleToggle() {
    setDisplay(
      display.map((disp) =>
        disp.isWorn ? { ...disp, isWorn: false } : { ...disp, isWorn: true }
      )
    );
  }

  return (
    <div className="container">
      <h1 className="title">Player Stat Sheet</h1>
      <h3>Stats:</h3>
      <div className="flex-hor">
        <div className="dmg"><h3>Damage: {sumOfDamage}</h3></div>
        <div className="dfc"><h3>Defense: {sumOfDefense}</h3></div>
      </div>
      <h3 >ITEM LIST</h3>
     
<label className="toggle">
  <input className="toggle-checkbox"type="checkbox" onChange={handleToggle}/>
  <div className="toggle-switch"></div>
  <span className="toggle-label"></span>
</label>

      {/* <div>Display Here</div> */}
      <div><h3>{displayGear}</h3></div>
    </div>
  );
}
