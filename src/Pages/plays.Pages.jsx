import React, {useState, useEffect} from 'react'
import axios from 'axios'
//poster component
import Poster from "../components/Poster/poster.component"

//plays filter
import PlaysFilter from '../components/PlaysFilter/playsfilter.components'



const PlayPage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect (() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);

        };
        requestPopularMovies();
    },[]);
   
    return (
        <>
            <div className="container mx-auto px-4">
                   <div className="w-full my-1 ml-1 lg:flex lg:flex-row-reverse md:ml-3">
                   <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-4">Plays in Udupi</h2>
                        <div className="flex flex-wrap  ">
                        <div className="w-1/2  md:w-1/3 lg:3/12 my-3">
                         
                            <Poster image={popularMovies} />
                            
                        </div>
                        
                    </div> 
                   </div>
                   
                    <div className="lg:w-3/12">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilter title="Date" tags={["Today","Tommarrow","Today","Tommarrow"]}/>
                        </div>
                        <div>
                            <hr/>
                        </div>
                        <div>
                            <PlaysFilter title="Language" tags={["Today","Man","Today","BNM"]}/>
                        </div>
                        <div>
                            <hr/>
                        </div>
                        <div>
                            <PlaysFilter title="Name" tags={["Sandeep","Tommarrow","Today","Tommarrow"]}/>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default PlayPage;  
