import React from "react";

//components Navbar
import Navbar from "../components/Navbar/navbar.component";

//corousael
import Herocarousel from "../components/Herocarousel/herocaousel.components";


const DefaultLayout = (props) =>{
    return (
        <>
            <Navbar/>
            <Herocarousel/>
            {props.children};
        </>

    );
}

export default DefaultLayout;