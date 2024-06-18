import React, {useState} from 'react'
import Vechl from './Vechl';
export default function Vech() {
    const [vechicle, setVechicle] = useState([
        {
          name: " TVS",
          model: 2024,
          type: "sports",
          pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkF5uutDstZdejJTt5PPw3DndZFgcQ6Q_7g&usqp=CAU"
        },
        {
          name: "Honda",
          model: 2024,
          type: "scote",
          pic:"https://bd.gaadicdn.com/upload/modellogo/64afb0b239cd1.jpg"

        },
        {
          name: " ktm",
          model:2023,
          type: "street fighter",
          pic:"https://imgd.aeplcdn.com/1056x594/n/cw/ec/45482/ktm-rc-125-front-three-quarter0.jpeg?q=80"
        },
      ]);
  return (
    <Vechl myVechicle={vechicle}/>
    
);
}

