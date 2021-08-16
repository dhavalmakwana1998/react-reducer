import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state === 0 ? (state = 0) : state - 1;
  }
  if (action.type === "INCREMENTBY") {
    return state + action.payload;
  }
  if (action.type === "DECREMENTBY") {
    return state === 0 ? (state = 0) : state - action.payload;
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
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
          <br></br>
          <button onClick={() => dispatch({ type: "INCREMENTBY", payload: 5 })}>
            Increment by 5
          </button>
          <button onClick={() => dispatch({ type: "DECREMENTBY", payload: 5 })}>
            Decrement by 5
          </button>
        </div>
      </div>
    </>
  );
};

export default Reducer;
