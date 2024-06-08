import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { increment, incrementByValue } from "./store/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

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
    </>
  );
}

export default App;
