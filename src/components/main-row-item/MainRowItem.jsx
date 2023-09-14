import { Container } from "../../utils/Utils"
import "./MainRowItem.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode,Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom"

const MainRowItem = ({movieData,titleText}) => {
  return (
    <Container>
      <div className="main__row-content"> 
      <h2>{titleText}</h2>
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
        slidesPerView={4}
        slidesPerGroup={2}
        spaceBetween={10}
        speed={1600}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        modules={[Autoplay,FreeMode]}
        className="main__row-swiper"
      >

      {
            movieData?.map(x=>
                    <SwiperSlide key={x.id}>
                      <div>
                      {x.first_air_date}
                        <Link to={`/movie-view/${x.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${x.backdrop_path}`} alt="" />
                        </Link>
                        <h3>{x.title}</h3>
                      </div>
                    </SwiperSlide>
                )
      }
      </Swiper>
        </div>
    </Container>
  )
}

export default MainRowItem