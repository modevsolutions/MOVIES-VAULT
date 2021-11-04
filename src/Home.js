import React from 'react';
import Form from './SearchForm';
import Movies from './Movies';
const Home = () => {
  return (
    <main>
      <Form />

      <Movies />
      <footer>
        <h4>App Developed by Modevsolutions || Api : OMDB</h4>
      </footer>
    </main>
  );
};

export default Home;
