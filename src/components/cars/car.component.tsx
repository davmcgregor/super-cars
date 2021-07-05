import {CarPrice} from '../carPrice/carPrice.component';
import {CarDetails} from '../carDetails/carDetails.component';

import carData from '../../data/carData.json';
import './car.css';

const car = carData[0];

export const CarComponent: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'Red',
      }}
    >
      <h1>
        {car.make} {car.model}
      </h1>
      <div className="carContainer">
        <CarDetails />
        <CarPrice />
      </div>
    </div>
  );
};
