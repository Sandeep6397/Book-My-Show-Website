import React, { Component } from 'react';
import { Route } from 'react-router';


//Layout
import MovieLayout from '../layouts/movie.layout';

const MovieHOC = ({component: Component, ...rest}) =>{
    return (
        <>
            <Route {...rest} component ={(props)=>(
                <MovieLayout>
                    <Component {...props}/>
                </MovieLayout>
            )} 

            />
        </>
    );
}

export default MovieHOC;