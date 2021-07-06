import {render, screen} from '@testing-library/react';

import {SearchResults} from './searchResults.component';
import {CarsContext} from '../../context/CarsContext';

test('SearchResults renders multiple results when a query has been made', () => {
  const store = {
    fetchCars: () => 'test',
    query: 'Mazda',
    results: [
      {
        make: 'Mazda',
        model: '2',
        price: 23990,
      },
      {
        make: 'Mazda',
        model: 'CX-5',
        price: 63990,
      },
    ],
  };

  render(
    <CarsContext.Provider value={store}>
      <SearchResults />
    </CarsContext.Provider>
  );

  expect(screen.getAllByRole('heading', {level: 2})).toHaveLength(2);
});
