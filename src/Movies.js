import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
export const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return (
      <section className='section'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <section className='movies'>
      {movies.map((movie) => {
        const { Poster: poster, Title: title, Year: year, imdbID: id } = movie;

        return (
          <Link to={`/movies/${id}`} key={id}>
            <article className='movie'>
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <div className='movie-info'>
                <h4>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
