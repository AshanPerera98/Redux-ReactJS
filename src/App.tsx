import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import {
  increment,
  incrementByValue,
  incrementAsync,
} from "./store/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h1>Redux Toolkit</h1>
      <h3>{count}</h3>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(incrementByValue(10));
        }}
      >
        Increment 10
      </button>
      <button
        onClick={() => {
          dispatch(incrementAsync(5));
        }}
      >
        IncrementAsync 5
      </button>
    </>
  );
}

export default App;
