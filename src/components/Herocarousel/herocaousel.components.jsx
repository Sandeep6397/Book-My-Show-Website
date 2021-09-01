import React,{useState,useEffect} from 'react';
import Heroslider from "react-slick";
import axios from 'axios';
import { NextArrow,PrevArrow } from './arrow.components';




const Herocarousel = () =>{
    const [images,setImages] = useState([]);

    useEffect(() => {
        
        //async
        const requestNowPlayingMovie = async()=> {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results );
        };
        requestNowPlayingMovie();
    },[]);

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding:"100px",
        slidesToShow: 1 ,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>, 
    }

    const settings = {
    
        arrows: true,
        centerMode: true,
        centerPadding:"0px",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>, 
      };
      
    return (
        <>
            <div className="lg:hidden">
                <Heroslider {...settings}>
                    {
                        images.map((image) =>(
                            <div className="w-full h-44 md:h-72 py-2">
                                <img  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="images" className="w-full h-full"/>
                            </div>

                        ))
                    }

                </Heroslider>
            </div>
            <div className="hidden lg:block">
                <Heroslider {...settingsLg}>
                    {
                        images.map((image) =>(
                            <div className="w-full h-96  px-2 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="images" className="w-full h-full rounded-lg "/>
                            </div>

                        ))
                    }

                </Heroslider>
            </div>

        </>
    )
}
export default Herocarousel;