import React from "react";


//component EntertainmentCard Slider

import EntertainmentCardSlider from "../components/Entertainment/entertainment.component";
import PosterSlider from "../components/PosterSlider/posterslider.componets";


import TempPosters from '../Config/Tempimages.config'


const HomePage = () =>{
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
                        
                        <PosterSlider images={TempPosters} title="Premiers" subTitle="Brand new releases every Friday" />
                        
                    </div>


                </div>
            </div>      
            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={TempPosters} title="Online Streaming Events" subTitle="" isDark={false}/>
            </div>
            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={TempPosters} title="Outdoor Events" subTitle="" isDark={false}/>
            </div>
            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={TempPosters} title="Laughter Therapy" subTitle="" isDark={false}/>
            </div>
            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={TempPosters} title="The Latest Plays " subTitle="" isDark={false}/>
            </div>
            <div className="container mx-auto px-4 my-8">
                <PosterSlider images={TempPosters} title="Popular Events" subTitle="" isDark={false}/>
            </div>
        </>
    );
};

export default HomePage;