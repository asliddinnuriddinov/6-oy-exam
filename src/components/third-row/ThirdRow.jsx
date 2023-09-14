import { useState,useEffect } from 'react';
import "./ThirdRow.scss";
import MainRowItem from '../main-row-item/MainRowItem';

const ThirdRow = () => {
    const [thirdRowData,setthirdRowData]=useState([]);
    useEffect(()=>{
        let isFetched=false;
        fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=12",{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM3MGRhMTdhMzEzOGNjZTMwOWQ0NWUxMWMyOWJhZCIsInN1YiI6IjY1MDFhMzQ2ZDdkY2QyMDExYzYwZjIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boN9ScsILeqrBzmg-35HoxfFrQkqYYJhSY_xaFN4PWk"
            }
        })
        .then(responce=>responce.json())
        .then(data=>setthirdRowData(data.results))
        .catch(err=>console.error(err));
        return()=>{
            isFetched=true;
        }
    },[]);
  return (
    <div className='third__row' >
        <MainRowItem movieData={thirdRowData} titleText={"Liked by elders"}/>
    </div>
  )
}

export default ThirdRow