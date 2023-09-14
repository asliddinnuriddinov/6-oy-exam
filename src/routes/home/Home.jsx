import React from 'react';
import "./Home.scss"
import Nav from '../../components/navbar/Nav'
import Banner from '../../components/banner/Banner';
import AllRows from '../../components/all-rows/AllRows';

const Home = () => {
  return (
    <>
        <Nav/>
        <Banner/>
        <AllRows/>
    </>
  )
}

export default Home