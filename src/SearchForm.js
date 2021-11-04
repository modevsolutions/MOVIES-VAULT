import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { inputValue, setInputValue, error } = useGlobalContext();

  const handleForm = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <section>
      <div className='form-hero'>
        <div className='hero-center'>
          <form className='search-form' onSubmit={(e) => e.preventDefault()}>
            <h2 className='hero-title'>search movies</h2>
            <input
              type='text'
              className='form-input'
              value={inputValue}
              onChange={handleForm}
            />

            <p className='error'>{error.msg}</p>
            <div className='hero-info'>
              Title || Released || Runtime || Actors || Country || Genre || Plot
              || Writer || Awards
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
