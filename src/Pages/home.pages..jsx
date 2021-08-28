import React from "react";


//component EntertainmentCard Slider

import EntertainmentCardSlider from "../components/Entertainment/entertainment.component";

const HomePage = () =>{
    return (
        <>
            <div className="w-full h-30 ">
                    <h1 className="text-2xl font-bold text-gray-800 ">The Best Of Entertainment</h1>
                    <h4 className="mb-3 text-gray-600"> Step out or stay in, interesting experiences for everyone.</h4>
                    
            
                <EntertainmentCardSlider/>
            </div>
            
        </>
    );
};

export default HomePage;