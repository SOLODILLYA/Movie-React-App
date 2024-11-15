import React from 'react';

function MovieInfo(props) {
  const { title, director, year, studio, poster, description } = props;

  return (
    <div className="movie-container">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Studio:</strong> {studio}</p>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
}

export default MovieInfo;