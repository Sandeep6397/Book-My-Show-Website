import React,{useContext} from 'react'
import MovieInfo from './movieinfo.component';

//context
import { MovieContext } from '../../Context/movie.Context';
const MovieHero = () => {

    const {movie} = useContext(MovieContext);

    return (
        <>
            <div className="w-full">
                <div className="md:hidden w-full" style={{height:"calc(177vw)"}}> {/* Mobile*/}
                    <div className=" absolute z-30 bottom-4 left-3">
                        <MovieInfo/>
                    </div>
                    <div className="w-full h-48 bg-opacity-50 absolute bottom-0 bg-black z-10"/>
                    <img 
                            src={`https://image.tmdb.org/t/p/original${movie .poster_path}`}
                            alt="movie poster"
                            className="w-full h-full" 
                    />
                </div>
                <div className="hidden relative md:block  w-full lg:hidden"  style={{height:"calc(135vw)"}}> {/* tablet*/}
                    <div className=" absolute z-30 bottom-10 ">
                        <MovieInfo/>
                    </div>
                    <div className="w-full h-60 bg-opacity-50 absolute bottom-0 bg-black z-10"/>
                    
                        <img 
                               src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt="movie poster"
                                className="w-full h-full"
                        />
                </div>
                <div className=" relative hidden w-full lg:block " style={{height:"30rem"}}>  {/* large screen*/}
                    
                    <div className="absolute h-full z-10 w-full"
                     style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
                    
                    <div className="absolute z-30 left-20 top-10 flex items-center gap-8">
                        <div className=" w-64 h-96 ">
                            <img 
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt="poster"
                                className="w-full h-full rounded-2xl"
                            />
                        </div>
                        <div className=" ">
                            <MovieInfo/>
                        </div>
                    </div>
                    <img 
                        
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="movie Poster"
                        className="w-full h-full"
                    />

                </div>
            </div>
        </>
    )
}

export default MovieHero;
