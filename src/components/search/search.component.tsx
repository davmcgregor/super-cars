import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';

import {SearchResults} from '../searchResults/searchResults.component';

import './search.css';

export const Search: React.FC = () => {
  const {query, setQuery, loading, error} = useContext(CarsContext);

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
        aria-label="Search for cars"
        data-testid="input"
      />
      {loading || error ? (
        <p>
          {loading && 'Loading...'}
          {error && 'Something went wrong, please try again'}
        </p>
      ) : null}
      <SearchResults />
    </div>
  );
};
