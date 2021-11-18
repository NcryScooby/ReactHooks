import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "addNumber":
      return { ...state, number: state.number + action.payload };
    case "add2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "mult7":
      return { ...state, number: state.number * 7 };
    case "div25":
      return { ...state, number: state.number / 25 };
      case "numberInt":
      return { ...state, number: parseInt(state.number) };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Fabrício" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "add2" })}
          >
            +2
          </button>
          <button className="btn" onClick={() => dispatch({ type: "mult7" })}>
            x7
          </button>
          <button className="btn" onClick={() => dispatch({ type: "div25" })}>
            /25
          </button>
          <button className="btn" onClick={() => dispatch({ type: "numberInt" })}>
            Int
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "addNumber", payload: -9})}
          >
            -9
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "addNumber", payload: +11})}
          >
            +11
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
