//HOC
import DefalutHOC from "./HOC/Defalut.HOC";

//Component
import HomePage from "./Pages/home.pages.";

// import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
      <DefalutHOC path="/"  exact component={HomePage}/>
    </>
  );
}

export default App;
