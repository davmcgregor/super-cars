import {render, screen} from '@testing-library/react';

import {Car} from './Car';
import {CarsContext} from '../../context/CarsContext';

test('Car renders information when a car is Selected', () => {
  const store = {
    selectedCar: {
      make: 'Mazda',
      model: 'CX-5',
      price: 1234,
      features: ['test', 'test'],
    },
  };

  render(
    <CarsContext.Provider value={store}>
      <Car />
    </CarsContext.Provider>
  );

  expect(screen.getAllByRole('heading', {level: 1})).toHaveLength(1);
  expect(screen.getByText('Mazda CX-5')).toBeInTheDocument();
});
