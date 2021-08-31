import {GoChevronRight} from 'react-icons/go';
import {BsSearch} from 'react-icons/bs';
import {FiChevronDown} from 'react-icons/fi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FiShare2} from 'react-icons/fi';

const NavSm = () => {           //// for small devices
    return (
        <>
            <div className = "text-white flex items-center justify-between w-full">
                <div>
                    <h3 className="text-xl font-bold py-1">It All Starts Here!</h3>
                </div>
                <div className="mx-2 w-6 h-6">
                    <FiShare2 className="w-full h-full"/>
                </div>
            </div>
        </>
    );
};


const NavLg = () => {           //// for large devices
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between ">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-7 h-7 flex items-center text-white">
                        <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-offie-android-icket-png.png" 
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full flex items-center gap-2 bg-white rounded-lg">
                        <BsSearch className="my-2 mx-3"/>
                        <input type ="search" 
                            className="w-full my-2 border-none focus:outline-none" 
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"

                        />
                    </div>

                </div>
                <div className="flex items-center gap-4">
                    <span className= "text-gray-400 text-sm flex items-center hover:text-white cursor-pointer ">
                            Udupi 
                            <FiChevronDown className="text-white" /> 
                    </span>

                    <button className="bg-red-500 rounded text-white text-sm py-1 px-4">
                        Sign in
                    </button>
                   <div className="w-12 h-12 p-2 text-white cursor-pointer" >
                        <GiHamburgerMenu className="w-full h-full"/>
                   </div>

                </div>
                 
            </div>

        </>
    )
};

const MovieNavBar = () =>{
    return (
        <>
            <nav className = "absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-800 p-3">
                <div className = "md:hidden">{/* for small/mobile devices*/ } <NavSm/> </div>
                <div className = "hidden md:block lg:hidden">{/* for medium/Tab devices */}<NavSm/></div>
                <div className = "hidden w-full lg:flex"> {/* for large/lapop devices*/}<NavLg/></div>
            </nav>

        </>
    )


}

export default MovieNavBar;
