import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';

import {SearchResults} from '../SearchResults/SearchResults';

import './search.css';

export const Search: React.FC = () => {
  const {query, setQuery, loading, error} = useContext(CarsContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
