import {render, screen} from '@testing-library/react';

import {CarPrice} from './carPrice.component';
import {CarsContext} from '../../context/CarsContext';

test('CarPrice renders information when a car is Selected', () => {
  const store = {
    selectedCar: {
      price: 39200,
      features: ['It is definitely a car', 'Will get you to new places'],
    },
  };

  render(
    <CarsContext.Provider value={store}>
      <CarPrice />
    </CarsContext.Provider>
  );
  expect(screen.getByText('$39,200')).toBeInTheDocument();
  expect(screen.getByText('Will get you to new places')).toBeInTheDocument();
});
