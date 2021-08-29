//HOC
import DefalutHOC from "./HOC/Defalut.HOC";

//Component HomePage
import HomePage from "./Pages/home.pages.";

//Component HomePage
import MoviePage from "./Pages/movie.pages";


// import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {
  return (
    <>
      <DefalutHOC path="/"  exact component={HomePage}/>
      <DefalutHOC path="/movies" exact component={MoviePage}/>
    </>
  );
}

export default App;
