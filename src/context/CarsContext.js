import React, {createContext, useState} from 'react';

export const CarsContext = createContext();

const CarsContextProvider = (props) => {
  const initialState = [];

  const [error, setError] = useState(null);
  const [results, setResults] = useState(initialState);
  const [loading, setLoading] = useState(null);

  return (
    <CarsContext.Provider
      value={{
        results,
        setResults,
      }}
    >
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;
