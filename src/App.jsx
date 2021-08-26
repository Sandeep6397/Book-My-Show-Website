//HOC
import DefalutHOC from "./HOC/Defalut.HOC";

//Component
import Temp from "./components/temp";

function App() {
  return (
    <>
      <DefalutHOC path="/"  exact component={Temp}/>
    </>
  );
}

export default App;
