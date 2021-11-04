import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';
import { url } from './Movies';

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, movies: movie, error } = useFetch(`&i=${id}`);

  const {
    Title: title,
    Released: released,
    Runtime: time,
    Actors: actors,
    Rated: rated,
    Director: director,
    Country: country,
    Genre: genre,
    Language: language,
    Plot: details,
    Poster: poster,
    Type: type,
    Writer: writer,
  } = movie;

  if (loading) {
    return <div className='loading'></div>;
  }
  if (error.response) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/'>
          <button className='btn'>back to movies</button>
        </Link>
      </div>
    );
  }
  return (
    <article className='single-movie'>
      <img src={poster === 'N/A' ? url : poster} alt={title} />
      <div>
        <h3>{title}</h3>

        {details !== 'N/A' && (
          <p>
            <b>Plot:</b> <span>{details}</span>
          </p>
        )}

        {released !== 'N/A' && (
          <p>
            <b>Year:</b> <span>{released}</span>
          </p>
        )}
        {time !== 'N/A' && (
          <p>
            <b>Run Time:</b> <span>{time}</span>
          </p>
        )}
        {actors !== 'N/A' && (
          <p>
            <b>Actors:</b> <span>{actors}</span>
          </p>
        )}
        {director !== 'N/A' && (
          <p>
            <b>Director:</b> <span>{director}</span>
          </p>
        )}
        {country !== 'N/A' && (
          <p>
            <b>Country:</b> <span>{country}</span>
          </p>
        )}
        {type !== 'N/A' && (
          <p>
            <b>Type:</b> <span>{type}</span>
          </p>
        )}
        {genre !== 'N/A' && (
          <p>
            <b>Genre:</b> <span>{genre}</span>
          </p>
        )}
        {rated !== 'N/A' && (
          <p>
            <b>Rated:</b> <span>{rated}</span>
          </p>
        )}
        {language !== 'N/A' && (
          <p>
            <b>Language:</b> <span>{language}</span>
          </p>
        )}
        {writer !== 'N/A' && (
          <p>
            <b>Writer:</b> <span>{writer}</span>
          </p>
        )}
        <Link to='/'>
          <button className='btn'>back to movies</button>
        </Link>
      </div>
    </article>
  );
};

export default SingleMovie;
