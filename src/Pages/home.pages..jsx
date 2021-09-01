
import React,{useState, useEffect} from "react";
import axios from "axios";


//component EntertainmentCard Slider

import EntertainmentCardSlider from "../components/Entertainment/entertainment.component";
import PosterSlider from "../components/PosterSlider/posterslider.componets";


import TempPosters from '../Config/Tempimages.config'


const HomePage = () =>{
    
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovie, setTopRatedMovies] = useState([]);
    const [upComingMovies, setUpComingMovies] = useState([]);

    useEffect (() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);

        };
        requestPopularMovies();
    },[]);
    
    useEffect (() => {
        const requestTopRatedMovie = async () => {
            const getTopRatedMovie = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovie.data.results);

        };
        requestTopRatedMovie();
    },[]);
  
    useEffect (() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpComingMovies(getUpcomingMovies.data.results);

        };
        requestUpcomingMovies();
    },[]);
  
    return (
        <>     
            <div className="flex flex-col gap-10">
                <div className="w-full h-30 p-2">
                        <h1 className="text-2xl font-bold text-gray-800 ">The Best Of Entertainment</h1>
                        <h4 className="mb-3 text-gray-600"> Step out or stay in, interesting experiences for everyone.</h4>
                        
                
                    <EntertainmentCardSlider/>
                    
                </div>
                <div className="bg-premier-700 py-6 w-full" >
                
                    <div className="container mx-auto ">
                        <div className="hidden  md:flex ">
                            <div>
                                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                    alt="imgage"
                                    className="w-full h-full"
                                />

                            </div>

                        </div>
                        
                        <PosterSlider images={popularMovies} title="Premiers" subTitle="Brand new releases every Friday" />
                        
                    </div>


                </div>
            </div>      
            <div className="container mx-auto px-4  my-8">
                <PosterSlider images={topRatedMovie} title="Online Streaming Events" subTitle="" isDark={false}/>
            </div>
            <div className="container mx-auto px-4 ">
                <PosterSlider images={upComingMovies} title="Outdoor Events" subTitle="" isDark={false}/>
            </div>
            
        </>
    );
};

export default HomePage;