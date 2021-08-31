import React from 'react'


const MovieInfo = () => {
    return (
        <>
            <div className="flex flex-col gap-5   lg:gap-6">
                <div className="flex items-center gap-3 w-full  md:px-4">
                    <div className="w-38 h-6">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt ="premier"
                            className="w-full h-full"
                        />
                    </div>
                   <span className="bg-bms-700 p-1 text-xs text-white rounded-md ">Streaming now</span>
                </div>
                <h1 className="hidden lg:block text-white text-4xl font-bold ">Justice Leaguge</h1>
                <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-6">
                    <div className="text-white font-light flex flex-col gap-2 md:px-4">
                        <h4>4K &bull; Enlish &bull; Action</h4>
                        <h4>1h 53m &bull; Action, Sci-Fi Thriller &bull; 13+</h4>
                    </div>
                    <div className="flex items-center gap-6 md:w-screen md:px-4 lg:w-full">
                        <button className="text-white bg-bms-100 font-semibold w-full rounded-md py-2">Rent ₹149</button>
                        <button className="text-white bg-bms-100 font-semibold w-full rounded-md py-2">Buy ₹449</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieInfo;
