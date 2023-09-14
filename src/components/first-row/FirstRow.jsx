import React, { useEffect, useState } from 'react';
import "./FirstRow.scss";
import  {Container}  from '../../utils/Utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode,Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom"

const FirstRow = () => {
    const [firstRowData,setFirstRowData]=useState([]);
    useEffect(()=>{
        let isFetched=false;
        fetch("https://api.themoviedb.org/3/discover/tv",{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM3MGRhMTdhMzEzOGNjZTMwOWQ0NWUxMWMyOWJhZCIsInN1YiI6IjY1MDFhMzQ2ZDdkY2QyMDExYzYwZjIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boN9ScsILeqrBzmg-35HoxfFrQkqYYJhSY_xaFN4PWk"
            }
        })
        .then(responce=>responce.json())
        .then(data=>setFirstRowData(data.results))
        .catch(err=>console.error(err));
        return()=>{
            isFetched=true;
        }
    },[]);

  return (
    <div className="first__row">
    <Container>
    <h2>Hollywood movie</h2>


    <div>
    <Swiper
                
                breakpoints={{
                  360:{
                      width:360,
                      slidesPerView:1.1,
                  },
                  460:{
                      width:460,
                      slidesPerView:1.7,
                  },
                  560:{
                      width:560,
                      slidesPerView:1.9,
                  },
                  760:{
                      width:760,
                      slidesPerView:3,
                  },
                }}
              modules={[Autoplay,FreeMode]}
              slidesPerView={15}
              spaceBetween={1}
              autoplay={{
                  delay: 1300,
                  disableOnInteraction: false,
                }}
              loop={true}
              freeMode={true}
              speed={650}
              className="first__row-swiper"
            >
      
            {
                  firstRowData?.map(x=>
                          <SwiperSlide key={x.id}>
                              <Link to={`/movie-view/${x.id}`}>
                              <img src={`https://image.tmdb.org/t/p/original${x.poster_path}`} alt="" />
                              </Link>
                              <h3>{x.name}</h3>
                          </SwiperSlide>
                      )
            }
            </Swiper>
    </div>

    </Container>
    </div>

  )
}

export default FirstRow