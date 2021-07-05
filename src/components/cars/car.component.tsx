import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';

import {CarPrice} from '../carPrice/carPrice.component';
import {CarSpecs} from '../carSpecs/carSpecs.component';

import './car.css';

export const CarComponent: React.FC = () => {
  const {selectedCar} = useContext(CarsContext);

  if (selectedCar) {
    return (
      <div>
        <h1 className="carHeader">
          {selectedCar.make} {selectedCar.model}
        </h1>
        <div className="carContainer">
          <CarSpecs />
          <CarPrice />
        </div>
      </div>
    );
  }
  return null;
};
