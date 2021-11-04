import React, { useEffect, useState } from 'react';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (URL) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ response: true, msg: '' });

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search || data);

        setError({ response: false, msg: '' });
      } else {
        setError({ response: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${URL}`);
  }, [URL]);
  return {
    loading,
    movies,
    error,
    fetchMovies,
    setLoading,
  };
};

export default useFetch;
