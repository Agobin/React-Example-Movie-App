import React from "react";
import { observer } from "mobx-react";
import { counterStore } from "../store/CounterStore";
import { movieStore } from "../store/MovieStore";
import { useEffect } from "react";

const Counter = observer(() => {
  useEffect(() => {
    movieStore.getMovies();
  }, []);
  return (
    <div>
      <input type="button" value="Inc" onClick={counterStore.handleDecrement} />

      <span style={{ margin: "0 10px" }}>{counterStore.count}</span>

      <input type="button" value="Dec" onClick={counterStore.handleDecrement} />
    </div>
  );
});

export default Counter;
