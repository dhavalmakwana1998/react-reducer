import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state == 0 ? (state = 0) : state - 1;
  }
  return state;
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>{state}</h1>
        <div className="btnStylePosition">
          <button onClick={() => dispatch({ type: "INCREMENT" })}> Inc </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}> Dec </button>
        </div>
      </div>
    </>
  );
};

export default Reducer;
