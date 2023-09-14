import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import { BrowserRouter } from "react-router-dom";
import Scroll from "./scrollToTop/Scroll"


ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <Scroll/>
     <App />
   </BrowserRouter>
)
