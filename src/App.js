import { useEffect, useState } from "react";
import './App.css';
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";

//284307cc
const API_URL='https://www.omdbapi.com?apikey=284307cc';

// const movie1={
//     "Title": "The Amazing Spiderman 2 Webb Cut",
//     "Year": "2021",
//     "imdbID": "tt18351128",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
// }

const App=()=>{
    const [Movies ,setMovies ]=useState([]);
    const [searchTerm ,setSearchterm]=useState('');

    const searchMovies= async(title) =>{
       const response= await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search)
    }
    useEffect(()=>{},[]);
    return(
            <div className="app">
                <h1>MOOVLY</h1>
                <div className="search">
                    <input 
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e)=>setSearchterm(e.target.value)}
                    />
                    <img
                    src={searchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}/>
            </div>
            {   
                Movies?.length>0 ?(
                    <div className="container">
                        {Movies.map((movie)=>(MovieCard(movie)))}
                    </div>
                ):(
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>  
                )
            }
            
        </div>
    );
}

export default App;