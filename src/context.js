import React, { useState, useContext, useEffect } from 'react';
import useFetch from './useFetch';
// make sure to use https

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
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
