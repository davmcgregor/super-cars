import './search.css';
import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';
import {SearchResultsComponent} from '../searchResults/searchResults.component';

export const SearchComponent: React.FC = () => {
  const {query, setQuery, loading, error} =
    useContext(CarsContext);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
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
      {loading || error ? (
        <p>
          {loading && 'Loading...'}
          {error && 'Something went wrong, please try again'}
        </p>
      ) : null}
      <SearchResultsComponent />
    </div>
  );
};
