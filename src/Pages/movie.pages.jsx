import React from 'react'
//component
import MovieHero from '../components/MovieHero/moviehero.component';

import PosterSlider from "../components/PosterSlider/posterslider.componets";
import TempPosters from '../Config/Tempimages.config'
import CastCrew from '../components/Cast/cast.component';
import {FaCcVisa} from 'react-icons/fa';
import {SiApplepay} from 'react-icons/si';





const MoviePage = () => {
    const Settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide:0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite:true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll:2,
               initialSlide:2, 
            },
    
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
            },
    
        },
     ],
      
    
    }; 
    return (
        <>  
            <MovieHero/>
            <div className="my-8 container px-4 lg:m-16 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                    <p>Bruce Wayne and Diana Prince try to bring the metahumans of
                        Earth together after the death of Clark Kent. Meanwhile, Darkseid
                    sends Steppenwolf to Earth with an army to subjugate humans.
                    </p>

                </div>
                <div className="my-6">
                    <hr/>
                </div>
                <div>
                    <h1 className="text-gray-800 font-bold text-2xl mb-5">Applicable offers</h1>
                    <div className="flex flex-col lg:flex-row gap-3">
                        <div className="flex itemS-start gap-2 bg-yellow-100 p-3  border-2  border-yellow-400 border-dashed rounded-lg ">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full"/>
                            </div>
                            <div className="flex flex-col items-start ">
                                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                                <p className="text-gray-600"> Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.</p>
                            </div>

                        </div>
                        <div className="flex itemS-start gap-2 bg-yellow-100 p-3  border-2  border-yellow-400 border-dashed rounded-lg ">
                            <div className="w-10 h-10">
                                <SiApplepay className="w-full h-full"/>
                            </div>
                            <div className="flex flex-col items-start ">
                                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                                <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                            </div>

                        </div>
                    </div>
                </div> 
                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl">Cast & Crew</h2>
                    <div className="flex flex-wrap gap-6">
                        <CastCrew 
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot"
                            role="Wonder Woman"
                        />
                        <CastCrew 
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                            castName="Gal Gadot"
                            role="Super Man"
                        />
                        <CastCrew 
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/matt-damon-1415-24-03-2017-12-31-21.jpg"
                            castName="Matt Damon"
                            role="Wonder Woman"
                        />
                        <CastCrew 
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot"
                            role="Wonder Woman"
                        />
                        <CastCrew 
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot"
                            role="Wonder Woman"
                        />
                        <CastCrew 
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot"
                            role="Wonder Woman"
                        />
                        <CastCrew 
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot"
                            role="Wonder Woman"
                        />
                        <CastCrew 
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot"
                            role="Wonder Woman"
                        />
                    </div>
                </div>
                <div className="my-6">
                    <hr/>
                </div>
                <div className="my-8">
                    <PosterSlider Config={Settings} images={TempPosters} title="You might also like" subTitle="" isDark={false}/>  
                </div>
                <div className="my-6">
                    <hr/>
                </div>
                <div className="my-8">
                    <PosterSlider Config={Settings} images={TempPosters} title="BMS XCLUSIV" subTitle="" isDark={false}/>  
                </div>
            </div>
            
        </>
    )
}

export default MoviePage;
