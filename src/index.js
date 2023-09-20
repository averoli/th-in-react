import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Repeat from "./Repeat";
import Interactivity from "./addidngInteractivity/Interactivity";
import { Memory } from "./memory/Memory";
import SeriesOfState from "./queueing/SeriesOfState";
import { UpdatingObject } from "./state/UpdatingObject";
import SpreadObject from "./state/SpreadObject";
import NestedObject from "./state/NestedObject";
import { BucketList } from "./state/BucketList";
import AddingArray from "./state/AddingArray";
import RemovingFromArray from "./state/RemovingFromArray";
import ShapeEditor from "./state/ShapeEditor";
import CounterList from "./state/CounterList";
import InsertingIntoArray from "./state/InsertingIntoArray";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Interactivity />
    <Memory />
    <SeriesOfState />
    {/* <UpdatingObject /> */}
    <SpreadObject />
    <NestedObject />
    <BucketList />
    <AddingArray />
    <RemovingFromArray />
    <ShapeEditor />
    <CounterList />
    <InsertingIntoArray />
    {/* <Repeat /> */}
  </React.StrictMode>
);
