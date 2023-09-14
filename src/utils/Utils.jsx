import React from 'react';
import "./Utils.scss"

const Container = ({children}) => {
  return (
    <div className='movie__container'>
        {children}
    </div>
  )
}

export  {Container}