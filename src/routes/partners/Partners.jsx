import { useState,useEffect } from 'react';
import "./Partners.scss"

const Partners = () => {
    const [partnersData,setpartnersData]=useState([]);
    useEffect(()=>{
        let isFetched=false;
        fetch(`https://api.themoviedb.org/3/watch/providers/movie`,{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM3MGRhMTdhMzEzOGNjZTMwOWQ0NWUxMWMyOWJhZCIsInN1YiI6IjY1MDFhMzQ2ZDdkY2QyMDExYzYwZjIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boN9ScsILeqrBzmg-35HoxfFrQkqYYJhSY_xaFN4PWk"
            }
        })
        .then(responce=>responce.json())
        .then(data=>setpartnersData(data.results))
        .catch(err=>console.error(err));
        return()=>{
            isFetched=true;
        }
    },[]);
    console.log(partnersData);
  return (
    <div className="partners">
        <div className="partners__content">
        <h1>PARTNERS</h1>
            <div className="partners__wrapper">
            {
                partnersData?.map(x=>
                        <div key={x.provider_id} className="partners__item">
                            <img src={`https://image.tmdb.org/t/p/original${x.logo_path}`} alt="" />
                            <h4>{x.provider_name}</h4>
                            <p>Languages: {x.display_priority}</p>
                        </div>
                    )
            }
            </div>
        </div>
    </div>
  )
}

export default Partners