import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/home/Home";
function App() {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
