import React from 'react';

const Poster = (props) => {
    return (
        <>
        <div className="flex flex-col items-start my-3">
            <div className="sm:h-40 md:h-80  w-full px-3 ">
                <img src={props.src} alt="Poster" className="w-full h-full rounded-xl "/>
            </div>
            <h3 className={`text-lg px-4 font-bold ${props.isDark ? "text-white" : "text-black"}`}>{props.title}</h3>
            <p className={`px-4 ${props.isDark ? "text-white" : "text-black"}`}>{props.subTitle}</p>
        </div>
        </>
    )
}
export default Poster;