import { useState,useEffect } from 'react';
import "./SecondRow.scss";
import MainRowItem from '../main-row-item/MainRowItem';

const SecondRow = () => {
    const [secondRowData,setSecondRowData]=useState([]);
    useEffect(()=>{
        let isFetched=false;
        fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=28",{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM3MGRhMTdhMzEzOGNjZTMwOWQ0NWUxMWMyOWJhZCIsInN1YiI6IjY1MDFhMzQ2ZDdkY2QyMDExYzYwZjIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boN9ScsILeqrBzmg-35HoxfFrQkqYYJhSY_xaFN4PWk"
            }
        })
        .then(responce=>responce.json())
        .then(data=>setSecondRowData(data.results))
        .catch(err=>console.error(err));
        return()=>{
            isFetched=true;
        }
    },[]);
  return (
    <div className='second__row' >
        <MainRowItem movieData={secondRowData} titleText={"Trending Now"}/>
    </div>
  )
}

export default SecondRow