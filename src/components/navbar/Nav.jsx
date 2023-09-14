import React, { useEffect, useState } from 'react'
import "./Nav.scss";
import logo from "../../assets/images/logo.svg";
import { Link,NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Nav = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        let isFetched=false;
        fetch("https://api.themoviedb.org/3/watch/providers/regions",{
            headers:{
                "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM3MGRhMTdhMzEzOGNjZTMwOWQ0NWUxMWMyOWJhZCIsInN1YiI6IjY1MDFhMzQ2ZDdkY2QyMDExYzYwZjIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.boN9ScsILeqrBzmg-35HoxfFrQkqYYJhSY_xaFN4PWk"
            }
        })
        .then(responce=>responce.json())
        .then(data=>setCountries(data.results))
        .catch(err=>console.error(err));
        return()=>{
            isFetched=true;
        }
    },[]);
  return (
    <nav>
        <div className="nav__links">
        <Link to="/">
            <img src={logo} alt="" />
        </Link>
        <ul>
            <li>
                <NavLink to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/tvshows">TV_SHOWS</NavLink>
            </li>
            <li>
                <NavLink to="/movies">MOVIES</NavLink>
            </li>
            <li>
                <NavLink to="/new">NEW</NavLink>
            </li>
            <li>
                <NavLink to="/partners">PARTENRS</NavLink>
            </li>
        </ul>
        </div>

        <div className="nav__search">
            <select>
                <option disabled hidden selected  value="">COUNTRIES</option>
                {
                    countries?.map(x=>
                            <option key={uuidv4()} value="{x.iso_3166_1}">{x.english_name}</option>
                        )
                }
            </select>

            <div className="nav__search-form">
                <form>
                    <input type="text" placeholder='SEARCH' />
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Nav