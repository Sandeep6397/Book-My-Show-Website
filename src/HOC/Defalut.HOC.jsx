import React, { Component } from 'react';
import { Route } from 'react-router';

//Layout
import DefaultLayout from '../layouts/Default.layout';

const DefalutHOC = ({component: Component, ...rest}) =>{
    return (
        <>
            <Route {...rest} component ={(props)=>(
                <DefaultLayout>
                    <Component {...props}/>
                </DefaultLayout>
            )} 

            />
        </>
    );
}

export default DefalutHOC;