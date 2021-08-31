import React from "react";

//components movie Navbar
import MovieNavBar from "../components/Navbar/movie.Component";

const MovieLayout = (props) =>{
    return (
        <>
            <MovieNavBar />
            
            {props.children}
        </>

    );
};

export default MovieLayout;