import { useState,useEffect } from 'react';
import "./FifthRow.scss";
import MainRowItem from '../main-row-item/MainRowItem';

const FifthRow = () => {
    const [fifthRowData,setfifthRowData]=useState([]);
    useEffect(()=>{
        let isFetched=false;
        fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=28",{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM3MGRhMTdhMzEzOGNjZTMwOWQ0NWUxMWMyOWJhZCIsInN1YiI6IjY1MDFhMzQ2ZDdkY2QyMDExYzYwZjIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boN9ScsILeqrBzmg-35HoxfFrQkqYYJhSY_xaFN4PWk"
            }
        })
        .then(responce=>responce.json())
        .then(data=>setfifthRowData(data.results))
        .catch(err=>console.error(err));
        return()=>{
            isFetched=true;
        }
    },[]);
  return (
    <div className='fifth__row' >
        <MainRowItem movieData={fifthRowData} titleText={"Europe Top"}/>
    </div>
  )
}

export default FifthRow