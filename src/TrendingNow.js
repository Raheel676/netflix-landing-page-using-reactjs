import React, { useRef, useState } from 'react';
import './style.css';

const TrendingNow = () => {
  const movieListRef = useRef(null);

  // State for selected region (Pakistan or Global)
  const [selectedRegion, setSelectedRegion] = useState('global');

  // Sample movie lists for Pakistan and Global
  const pakistanMovies = [
    { id: 1, title: 'Pakistani Movie 1', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },
    { id: 2, title: 'Pakistani Movie 2', poster: 'https://m.media-amazon.com/images/I/51jNORv6nQL._AC_.jpg' },
    { id: 3, title: 'Pakistani Movie 3', poster: 'https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg' },
    { id: 4, title: 'Pakistani Movie 4', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },
    { id: 5, title: 'Pakistani Movie 5', poster: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg' },
    { id: 1, title: 'Pakistani Movie 1', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },
    { id: 1, title: 'Pakistani Movie 1', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },
    { id: 1, title: 'Pakistani Movie 1', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },

  ];
  const globalMovies = [
    { id: 1, title: 'Global Movie 1', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },
    { id: 2, title: 'Global Movie 2', poster: 'https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg' },
    { id: 3, title: 'Global Movie 3', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },
    { id: 4, title: 'Global Movie 4', poster: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg' },
    { id: 5, title: 'Global Movie 5', poster: 'https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_SY679_.jpg' },
    { id: 1, title: 'Global Movie 1', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },
    { id: 1, title: 'Global Movie 1', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },
    { id: 1, title: 'Global Movie 1', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },
    { id: 1, title: 'Global Movie 1', poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg' },

  ];
  

  const movies = selectedRegion === 'pakistan' ? pakistanMovies : globalMovies;

  const scrollMovies = (direction) => {
    if (direction === 'left') {
      movieListRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    } else {
      movieListRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="trending-now">
      <div className="trending-header">
        <h2>Trending Now</h2>
        <select
          className="region-select"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="global">Global</option>
          <option value="pakistan">Pakistan</option>
        </select>
      </div>

      <div className="movie-carousel">
        <button className="scroll-btn left" onClick={() => scrollMovies('left')}>
          &#8249; 
        </button>
        <div className="movie-list" ref={movieListRef}>
          {movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <p className="movie-title">{movie.title}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollMovies('right')}>
          &#8250; 
        </button>
      </div>
    </section>
  );
};

export default TrendingNow;
