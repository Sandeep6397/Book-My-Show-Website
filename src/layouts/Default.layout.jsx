import React from "react";

const DefaultLayout = (props) =>{
    return (
        <>
            <div className = "text-xl ">Defalut Layout</div>
            {props.children};
        </>

    );
}

export default DefaultLayout;