import './App.css';
import { useReducer } from "react";

const ACTION = {
  ADD_DIGIT: 'ADD_DIGIT',
  CLEAR: 'CLEAR',
  DELETE_DIGIT: 'DELETE_DIGIT',
  CHOOSE_OPERATION: 'CHOOSE_OPERATION',
  EVALUATE: 'EVALUATE'
}
// function reducer(state, action)
// break action to type and payload 
// spreading out operator ...state 
function reducer(state, { type, payload }) {
  // switch (type) {
  //   case: ACTION.ADD_DIGIT:
  //     return {}
  //   case: ACTION.CLEAR:
  //     return {
  //       ...state,
  //     }

  //   case: ACTION.DELETE_DIGIT:
  //     return {
  //       ...state,
  //     }

  //   case: ACTION.CHOOSE_OPERATION:
  //     return {
  //       ...state,
  //     }

  //   case: ACTION.EVALUATE:
  //     return {
  //       ...state,
  //     }
  // }

}
function App() {
  // initial stateis an empty object for now 
  // const [state, dispatch] = useReducer(reducer, {});
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two"> AC </button>
      <button> DEL </button>
      <button> ÷ </button>
      <button> 1 </button>
      <button> 2 </button>
      <button> 3 </button>
      <button> * </button>
      <button> 4 </button>
      <button> 5 </button>
      <button> 6 </button>
      <button> + </button>
      <button> 7 </button>
      <button> 8 </button>
      <button> 9 </button>
      <button> - </button>
      <button> . </button>
      <button> 0 </button>
      <button className="span-two"> = </button>
    </div>
  );
}

export default App;
