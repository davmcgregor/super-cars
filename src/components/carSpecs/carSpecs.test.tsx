import {render, screen} from '@testing-library/react';

import {CarSpecs} from './carSpecs.component';
import {CarsContext} from '../../context/CarsContext';

test('CarSpecs renders information when a car is Selected', () => {
  const store = {
    selectedCar: {
      fuelType: 'Unleaded',
      shiftType: 'Manual',
      colour: 'Gold',
    },
  };

  render(
    <CarsContext.Provider value={store}>
      <CarSpecs />
    </CarsContext.Provider>
  );
  expect(screen.getByText('Unleaded')).toBeInTheDocument();
  expect(screen.getByText('Manual')).toBeInTheDocument();
  expect(screen.getByText('Gold')).toBeInTheDocument();
});
