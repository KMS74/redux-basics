import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.reducerCounter.counter);
  const isLogin = useSelector((state) => state.reducerAuth.isLog);
  const dispatcher = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        className="incre"
        onClick={() => dispatcher({ type: "INCREMENT" })}
      >
        Increase
      </button>
      <button
        className="decre"
        onClick={() => dispatcher({ type: "DECREMENT" })}
      >
        Decrease
      </button>
      <button
        disabled={isLogin}
        className="login"
        onClick={() => dispatcher({ type: "IsLog" })}
      >
        login
      </button>
      <button
        disabled={!isLogin}
        className="logout"
        onClick={() => dispatcher({ type: "Logout" })}
      >
        logout
      </button>
      {isLogin && <h3>The usre is logged in</h3>}
    </div>
  );
}

export default App;
