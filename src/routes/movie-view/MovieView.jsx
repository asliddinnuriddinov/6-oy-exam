import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom"
import "./MovieView.scss";
import AllRows from '../../components/all-rows/AllRows';
import { FiStar } from "react-icons/fi"

const MovieView = () => {
    let {movieId}=useParams();
    const [singleMovieData,setsingleMovieData]=useState([]);
    useEffect(()=>{
        window.scrollTo({ top: 0, left: 0});
        let isFetched=false;
        fetch(`https://api.themoviedb.org/3/movie/${movieId}`,{
            headers:{
                accept: 'application/json',
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM3MGRhMTdhMzEzOGNjZTMwOWQ0NWUxMWMyOWJhZCIsInN1YiI6IjY1MDFhMzQ2ZDdkY2QyMDExYzYwZjIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boN9ScsILeqrBzmg-35HoxfFrQkqYYJhSY_xaFN4PWk"
            }
        })
        .then(responce=>responce.json())
        .then(data=>setsingleMovieData(data))
        .catch(err=>console.error(err));
        return()=>{
            isFetched=true;
        }
    },[movieId]);
    console.log(singleMovieData);
  return (
    <div className="movie__view">
        <div className="movie__info">
            <div className="movie__left">
                <img src={`https://image.tmdb.org/t/p/original${singleMovieData.backdrop_path}`} alt="" />
            </div>
            <div className="movie__right">
                <h1>{singleMovieData.title}</h1>
                <p>{singleMovieData.overview}</p>
                <div className="movie__rating">
                    <div className="star">
                        <FiStar/>
                        <b>{singleMovieData.vote_average}</b>
                    </div>
                    <span>Chiqarilgan Sana: {singleMovieData.release_date}</span>
                </div>
                <small className='overall__vote'>{singleMovieData.vote_count} kishi ovoz bergan</small>
                <strong className='movie__language'>TIL: {
                    singleMovieData.original_language}</strong>
            </div>
        </div>
        <AllRows/>
    </div>
  )
}

export default MovieView