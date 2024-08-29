import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import peliculas from './MOVIES_DATA.json';

function SearchComponent() {
    const [search, setSearch] = useState('')
    return (
        <form action="" className="search-bar">
            <input
                type="text"
                value={search}
                name="search"
                pattern=".*\S.*"
                required
                onChange={(e) => setSearch(e.target.value)} />
            <button className="search-btn" type="submit">
                <span>Search</span>
            </button>
        </form>
    )
}

function MovieCard({
    poster,
    title,
    releaseDate,
    duration,
    maturity,
    genres,
    rating,
    metascore,
    director,
    mainActors,
    plot,
}) {
    return (
        <li className="movie-card">
            <div className="movie-info">
                <img src={poster} alt={`Poster de ${title}`} />
                <ul>
                    <li><h2>{title}</h2></li>
                    <li className='lh'><strong><span>{releaseDate}</span></strong></li>
                    <li className='lh'><strong><span>{duration}</span></strong></li>
                    <li className='lh'><strong><span>{maturity}</span></strong></li>
                    <li className='lh'><strong><span>{genres.join(' - ')}</span></strong></li>
                    <li><h4>Rating: {rating} </h4></li>
                    <li><h4>Metascore: <span className={metascore > 59 ? 'metascore-green' : metascore < 50 ? 'metascore-red' : 'metascore-yellow'}>{metascore}</span></h4></li>
                    <li><h4>Director: {director}</h4></li>
                    <li><h4>Cast: {mainActors.join(' - ')}</h4></li>
                    <li><p>{plot}</p></li>
                </ul>
            </div>
        </li>
    );
}

function App() {
    return (
        <>
            <SearchComponent />
            <ul className="movie-list">
                {peliculas.map((pelicula) => (
                    <MovieCard key={pelicula.duration}
                        poster={pelicula.poster}
                        title={pelicula.title}
                        releaseDate={pelicula.releaseDate}
                        duration={pelicula.duration}
                        maturity={pelicula.maturity}
                        genres={pelicula.genres}
                        rating={pelicula.rating}
                        metascore={pelicula.metascore}
                        director={pelicula.director}
                        mainActors={pelicula.mainActors}
                        plot={pelicula.plot} />
                ))}
            </ul>
        </>
    );
}


const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App />);
