import React from 'react';
import { Routes,Route } from "react-router-dom";
import Home from './home/Home';
import MovieView from './movie-view/MovieView';
import Partners from './partners/Partners';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie-view/:movieId' element={<MovieView/>}/>
        <Route path='/partners' element={<Partners/>}/>
    </Routes>
  )
}

export default AllRoutes;

