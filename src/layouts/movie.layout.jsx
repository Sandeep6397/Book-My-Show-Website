import axios from "axios";
import React,{useEffect, useContext} from "react";

import { useParams } from "react-router";//from Hooks

//components movie Navbar
import MovieNavBar from "../components/Navbar/movie.Component";

//context
import { MovieContext } from "../Context/movie.Context";
const MovieLayout = (props) =>{

    const {id} = useParams();
    const {movie,setMovie} = useContext(MovieContext);
    useEffect(()=> {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        };
        requestMovie();
    },[id]);

    return (
        <>
            <MovieNavBar />
            
            {props.children}
        </>

    );
};

export default MovieLayout;