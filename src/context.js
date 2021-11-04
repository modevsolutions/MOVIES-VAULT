import React, { useState, useContext } from 'react';
import useFetch from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('squid');
  const { loading, movies, error } = useFetch(`&s=${inputValue}`);

  return (
    <AppContext.Provider
      value={{ loading, movies, inputValue, setInputValue, error }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
