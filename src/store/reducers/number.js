export default function numberReducer(state, action) {
    switch (action.type) {
      case "addNumber":
        return { ...state, number: state.number + action.payload };
      case "add2":
        return { ...state, number: state.number + 2 };
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