import React, {createContext, useState} from 'react';
import {findCars} from '../components/cars/car.api';
export const CarsContext = createContext();

const CarsContextProvider = (props) => {
  const initialState = [];
  const testState = [
    {make: 'Mazda', model: '2', price: 23990},
    {make: 'Mazda', model: '2', price: 23990},
    {make: 'Mazda', model: '2', price: 23990},
  ];

  const [query, setQuery] = useState('');
  const [results, setResults] = useState(testState);
  const [selectedCar, setSelectedCar] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <CarsContext.Provider
      value={{
        results,
        setResults,
        query,
        setQuery,
        selectedCar,
        setSelectedCar,
      }}
    >
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;
