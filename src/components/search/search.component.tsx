import './search.css';
import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';
import {findCars} from '../cars/car.api';
import {SearchResultsComponent} from '../searchResults/searchResults.component';

export const SearchComponent: React.FC = () => {
  const {query, setQuery, results, setResults} = useContext(CarsContext);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
    findCars(query).then((data) => setResults(data));
  };

  return (
    <div className="searchContainer">
      <input
        className="search"
        type="search"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      {results.length ? <SearchResultsComponent /> : null}
    </div>
  );
};
