import React from 'react';

export const PrevArrow = (props) => {
    //class style and onClick ---> props will be passed by React
    return (
        <>
            <div className={props.className}
                style = {{...props.style, backgroundColor:"black"}}
                onClick = {props.onClick}
            />
        </>
    );

};

export const NextArrow = (props) => {
    return (
        <>
            <div className = "conatiner mx-auto px-4">
                <div  className={props.className}
                    style = {{...props.style, backgroundColor:"black"}}
                    onClick = {props.onClick}

                />


            </div>
            
            


        </>
    );

    
}