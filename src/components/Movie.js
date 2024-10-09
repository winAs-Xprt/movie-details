import React, { useEffect, useState } from 'react';
import './Movie.css'; // Make sure this line is included at the top of your Movie.js file


function Movie() {
    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=a69483863efbf6373dc0621eb891cd3f")
            .then(res => res.json())
            .then(json => {
                console.log(json.results);
                setMovieList(json.results); // Update the movie list state
            })
            .catch(error => console.error('Error fetching data:', error)); // Handle any fetch errors
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Movie List</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {movieList.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title}
                        />
                        <h3 className="movie-title">{movie.original_title}</h3>
                        <p className="movie-info"><strong>Language:</strong> {movie.original_language}</p>
                        <p className="movie-info"><strong>Overview:</strong> {movie.overview}</p>
                        <p className="movie-info"><strong>Release Date:</strong> {movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movie;
