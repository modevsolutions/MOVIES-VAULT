import React from 'react';
import Form from './SearchForm';
import Movies from './Movies';
import { useGlobalContext } from './context';
const Home = () => {
  const { loading } = useGlobalContext();
  return (
    <main>
      <Form />

      <Movies />
      {!loading && (
        <footer>
          <h4>
            App Developed by{' '}
            <a href='https://www.modevsolutions.com'>Modevsolutions</a> || Api :
            OMDB
          </h4>
        </footer>
      )}
    </main>
  );
};

export default Home;
