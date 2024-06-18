import React,{useState} from 'react'
import Movi from './Movi';
import './Movie.css';

export default function Movies() {
    const [movie, setMovie] = useState([
        {
          name: "Don",
          year: 2024,
          pic:"https://upload.wikimedia.org/wikipedia/en/0/03/Don_2022_poster.jpg"
        },
        {
          name: "ram",
          year: 2024,
          pic:"https://odishabytes.com/wp-content/uploads/2023/10/Screenshot-2023-10-24-154309-e1698142428928-1200x900.png"

        },
        {
          name: " king",
          year:2023,
          type: "street fighter",
          pic:"https://upload.wikimedia.org/wikipedia/en/f/f7/King_poster.jpg"
        },
        {
          name: " king",
          year:2023,
          pic:"https://upload.wikimedia.org/wikipedia/en/f/f7/King_poster.jpg"
        },
      ]);
  return (
    <div>
        <Movi  movies={movie}/>
    </div>
  )
}
