import React, { useEffect, useState } from 'react';
import "./Banner.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,FreeMode } from 'swiper/modules';
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const Banner = () => {
    const [bannerData,setBannerData]=useState([]);
    useEffect(()=>{
        let isFetched=false;
        fetch("https://api.themoviedb.org/3/movie/top_rated?&with_networks=213",{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM3MGRhMTdhMzEzOGNjZTMwOWQ0NWUxMWMyOWJhZCIsInN1YiI6IjY1MDFhMzQ2ZDdkY2QyMDExYzYwZjIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boN9ScsILeqrBzmg-35HoxfFrQkqYYJhSY_xaFN4PWk"
            }
        })
        .then(responce=>responce.json())
        .then(data=>setBannerData(data.results))
        .catch(err=>console.error(err))
        return()=>{
            isFetched=true;
        }
    },[]);
  return (
    <div className="banner">
        <Swiper
        slidesPerGroup={1}
        loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1300}
          freeMode={true}
          modules={[Autoplay,FreeMode]}
        className="banner__swiper">

        {
            bannerData?.map(x=>
                <SwiperSlide key={uuidv4()} style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${x.backdrop_path})`}}>
                    <div className="banner__info">
                        <h2>{x.title}</h2>
                        <div className="banner__links">
                            <button>
                                <FiPlay/> PLAY
                            </button>
                            <Link to={`/movie-view/${x.id}`}>More Info</Link>
                        </div>
                    </div>
                </SwiperSlide>
                )
        }
    </Swiper>
    </div>
  )
}

export default Banner