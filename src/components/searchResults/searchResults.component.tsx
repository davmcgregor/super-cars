import './searchResults.css';
import React, {useContext, useEffect} from 'react';
import {CarsContext} from '../../context/CarsContext';
import {getCarDetails} from '../cars/car.api';
import {formatter} from '../../utils/utils';

export const SearchResultsComponent: React.FC = () => {
  const {results, setResults, query, setQuery, fetchCars, setSelectedCar} =
    useContext(CarsContext);

  const handleClick = (make: string, model: string) => {
    setSelectedCar(getCarDetails(make, model));
    setResults([]);
    setQuery('');
  };

  useEffect(() => {
    if (query.length) {
      fetchCars(query);
    } else {
      setResults([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (results.length) {
    return (
      <div className="resultsContainer">
        <div className="resultsWrapper">
          {results.map((car: any, key: any) => (
            <div
              className="resultsItem"
              key={key}
              onClick={() => handleClick(car.make, car.model)}
            >
              <h2>
                {car.make} {car.model}
                <br />
                {formatter(car.price)}
              </h2>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
