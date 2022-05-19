import React from 'react'
import Poster from '../Poster/poster.component'; 
//corousel component
import PosterCarosalSetting from '../../Config/postercorosal.config'
import Slider from 'react-slick';

const PosterSlider = (props) =>{
    const SliderConfig = props.Config? props.Config: PosterCarosalSetting;
    return (
        <>
            <div className="flex flex-col items-start pl-3">
                        <h1 className={`text-2xl font-bold  ${props.isDark ? "text-white" : "text-black"}`}>{props.title}</h1>
                        <h3 className={`text-xl font-bold  ${props.isDark ? "text-white" : "text-black"}`}>{props.subTitle}</h3>
            </div>
            <Slider { ...SliderConfig}>
            {
                props.images.map((images) =>(
                    <Poster {...images} isDark={props.isDark}/>
                ))
            }

            </Slider>


            
        </>
    )
}

export default PosterSlider;
