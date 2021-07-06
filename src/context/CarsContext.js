import {createContext, useState} from 'react';
import {findCars} from '../components/car/car.api';

export const CarsContext = createContext();

const CarsContextProvider = (props) => {
  const initialState = [];
  // const testState = [
  //   {make: 'Mazda', model: '2', price: 23990},
  //   {make: 'Mazda', model: '2', price: 23990},
  //   {make: 'Mazda', model: '2', price: 23990},
  // ];

  const [query, setQuery] = useState('');
  const [results, setResults] = useState(initialState);
  const [selectedCar, setSelectedCar] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchCars = async (searchTerm) => {
    try {
      setLoading(true);
      let cars = await findCars(searchTerm);
      setResults(cars);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <CarsContext.Provider
      value={{
        error,
        loading,
        results,
        setResults,
        query,
        setQuery,
        selectedCar,
        setSelectedCar,
        fetchCars,
      }}
    >
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;
