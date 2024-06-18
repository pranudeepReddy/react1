import React from 'react'

export default function Movi(props) {
  return (
    <div className='movie-parent'>{
        props.movies.map((vec)=>(
            <div className='movie-sub'>
            <p>Name is : {vec.name} </p>
            <p>year is :{vec.year} </p>
           
            <img src={vec.pic} alt='img of bike' width="20%"/>
            </div>
            
            
        
        ))}
      
      
    </div>
  )
}
