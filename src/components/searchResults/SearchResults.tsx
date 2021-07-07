import React, {useContext, useEffect} from 'react';
import {Car} from '../Car/Car.d';

import {CarsContext} from '../../context/CarsContext';

import {getCarDetails} from '../Car/Car.api';
import {formatter} from '../../utils/utils';

import './SearchResults.css';

export const SearchResults: React.FC = () => {
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
          {results.map((car: Car, key: number) => (
            <div
              className="resultsItem"
              key={key}
              onClick={() => handleClick(car.make, car.model)}
              tabIndex={0}
              role="button"
              aria-label={car.make + ' ' + car.model}
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
