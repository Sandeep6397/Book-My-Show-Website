import React from 'react'

import Poster from '../Poster/poster.component';

//config
import PosterCarosalSetting from '../../Config/postercorosal.config'

//config Images
import Premierimages from '../../Config/Tempimages.config';
import Slider from 'react-slick';
 const Premier = () => {
    
    
    return (
        <>
            {/* <div className="flex flex-col items-start pl-3">
                        <h1 className="text-white text-2xl font-bold">Premiers</h1>
                        <h3 className="text-white">Brand new releases every Friday</h3>
            </div>
            <Slider {...PosterCarosalSetting}>
            {
                Premierimages.map((images) =>(
                    <Poster{...images} isDark/>
                ))
            }

            </Slider> */}
            {/* <div className="flex flex-col items-start pl-3">
                        <h1 className="text-white text-2xl font-bold">Premiers</h1>
                        <h3 className="text-white">Brand new releases every Friday</h3>
            </div>

            <div className="lg:hidden">
                <Slider {...SettingsSd}>
                {
                    Premierimages.map((images) =>(
                    <Poster{...images} isDark/>
                    ))
                }

                </Slider>

            </div>

            <div className="hidden lg:block">
                <Slider {...Settings}>
                {
                    Premierimages.map((images) =>(
                    <Poster{...images} isDark/>
                    ))
                }

                </Slider>

            </div> */}
        </>
    );
};

export default Premier; 
