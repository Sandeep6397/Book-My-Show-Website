import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) =>{

    return (
        <>
            <div className="w-full h-30 px-2">
                <img src={props.src} alt="Card" className="w-full h-full rounded-xl"/>
            </div>

        </>
    );
};

const EntertainmentCardSlider = () =>{
    const EntertainmentImages = ["https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTU1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png",
                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png",
                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png"];
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 4,
        SlidesToScroll: 4,
        InitialSlide:0,
        responsive: [{
            breakpoints: 1024,
            settings: {
                slidesToShow: 3,
                SlidesToScroll: 2,
                infinity:true,
            },
            breakpoints: 600,
            settings: {
                slidesToShow: 2,
                SlidesToScroll: 1,
                infinity:true,
                InitialSlide:1,
            },
            breakpoints: 480,
            settings: {
                slidesToShow: 1,
                SlidesToScroll: 1,
                infinity:true,
                
            }



        }]

    }
    return (
        <>
            <Slider {...settings}>
                {
                    EntertainmentImages.map((image) =>(
                        <EntertainmentCard src={image}/>

                ))}  

            </Slider>
        </>
    );
}

export default EntertainmentCardSlider;