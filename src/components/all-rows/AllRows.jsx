import React from 'react';
import "./AllRows.scss"
import FirstRow from '../first-row/FirstRow';
import SecondRow from '../second-row/SecondRow';
import ThirdRow from '../third-row/ThirdRow';
import ForthRow from '../forth-row/ForthRow';
import FifthRow from '../fifth-row/FifthRow';
import { useLocation } from "react-router-dom"

const AllRows = () => {
    let location=useLocation().pathname;
  return (
    <div style={location.includes("/movie-view")?{marginTop:"0"}:{marginTop:"-190px"}} className="all__rows">
        <FirstRow/>
        <SecondRow/>
        <ThirdRow/>
        <ForthRow/>
        <FifthRow/>
    </div>
  )
}

export default AllRows