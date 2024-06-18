import React from 'react'


export default function Vechl(props) {
  return (
    <div>{
        props.myVechicle.map((vec)=>(
            <div>
            <p>Name is : {vec.name} </p>
            <p>model is :{vec.model} </p>
            <p>type is : {vec.type} </p>
            <img src={vec.pic} alt='img of bike' width="20%"/>
            </div>
            
            
        
        ))}
      
    </div>
  )
}
