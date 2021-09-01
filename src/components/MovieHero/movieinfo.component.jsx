import React,{useContext,useState} from 'react'

//context
import { MovieContext } from '../../Context/movie.Context';

//component Payment Modal
import PaymentModal from '../PaymentModal/payment.component';

const MovieInfo = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [price,setPrice] =useState(0);

    const {movie} = useContext(MovieContext);
    
    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };
    const buyMovies = () => {
        setIsOpen(true);
        setPrice(599);
    }
    //optional chaining
    const genres = movie.genres && movie.genres.map(({name}) => name).join(", ");
    
    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
            <div className="flex flex-col gap-5   lg:gap-6">
                <div className="flex items-center gap-3 w-full  md:px-4">
                    <div className="w-38 h-6">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt ="premier"
                            className="w-full h-full"
                        />
                    </div>
                   <span className="bg-bms-700 p-1 text-xs text-white rounded-md ">{movie.original_title}</span>
                </div>
                <h1 className="hidden lg:block text-white text-4xl font-bold ">Justice Leaguge</h1>
                <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-6">
                    <div className="text-white font-light flex flex-col gap-2 md:px-4">
                        <h4>4K &bull; {movie.original_language} &bull; Action</h4>
                        <h4>{(movie.runtime/60).toFixed(2)} h  &bull; {genres} &bull; 13+</h4>
                    </div>
                    <div className="flex items-center gap-6 md:w-screen md:px-4 lg:w-full">
                        <button onClick={rentMovies} className="text-white bg-bms-100 font-semibold w-full rounded-md py-2">Rent ₹149</button>
                        <button onClick={buyMovies} className="text-white bg-bms-100 font-semibold w-full rounded-md py-2">Buy ₹449</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieInfo;
