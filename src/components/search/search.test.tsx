import {render, screen} from '@testing-library/react';

import {Search} from './search.component';
import {CarsContext} from '../../context/CarsContext';

test('Search renders an input tag with query value', () => {
  const store = {
    fetchCars: () => [],
    query: 'Mazda',
    results: [],
    setResults: () => [],
    setQuery: () => '',
  };

  render(
    <CarsContext.Provider value={store}>
      <Search />
    </CarsContext.Provider>
  );
  const inputEl = screen.getByTestId('input');
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute('type', 'search');
  expect(screen.getByTestId('input')).toHaveValue('Mazda');
});
