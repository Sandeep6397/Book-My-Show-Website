import React from 'react';
import Heroslider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Herocarousel = () =>{

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding:"100px",
        slidesToShow: 1 ,
        infinite: true,
        speed: 500,
        slidesToScroll: 1
    }

    const settings = {
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding:"0px",
        infinite: true,
        speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
      };
      const images = ["https://images.unsplash.com/photo-1622448469111-9627e13ebad2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1622115064943-f3cdd1af1b17?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1619724509229-18c42de2bf77?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1586144131462-fa2a2b6d070c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80",
        "https://images.unsplash.com/photo-1629728242979-5ee6a919c91e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
    return (
        <>
            <div className="lg:hidden">
                <Heroslider {...settings}>
                    {
                        images.map((image) =>(
                            <div className="w-full h-44 md:h-72 py-2">
                                <img  src={image} alt="images" className="w-full h-full"/>
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
                                <img  src={image} alt="images" className="w-full h-full rounded-lg "/>
                            </div>

                        ))
                    }

                </Heroslider>
            </div>

        </>
    )
}
export default Herocarousel;