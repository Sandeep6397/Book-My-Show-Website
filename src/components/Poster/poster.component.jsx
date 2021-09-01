import React from 'react';
import {Link} from 'react-router-dom'

const Poster = (props) => {
    return (
        <Link to={`/movie/${props.id}  `}>
        <div className="flex flex-col items-start my-3">
            <div className="sm:h-30  md:h-80  w-full px-1 md:px-3 ">
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                  alt="Poster"
                  className="w-full h-full rounded-md md:rounded-xl "/>
            </div>
            <h3 className={`text-lg px-4 font-bold ${props.isDark ? "text-white" : "text-black"}`}>{props.original_title}</h3>
            <p className={`px-4 ${props.isDark ? "text-white" : "text-black"}`}>{props.subTitle}</p>
        </div>
        </Link>
    )
}
export default Poster;