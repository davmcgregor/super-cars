import './searchResults.css';
import React, {useContext} from 'react';
import {CarsContext} from '../../context/CarsContext';
import {getCarDetails} from '../cars/car.api';
import {formatter} from '../../utils/utils';

export const SearchResultsComponent: React.FC = () => {
  const {results} = useContext(CarsContext);
  console.log(results);

  return (
    <div className="searchResultsContainer">
      <div className="searchResultsDropdown">
        {results.map((car: any, key: any) => (
          <div key={key}>
            <h2>{car.make}</h2>
            <h2>{formatter(car.price)}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
