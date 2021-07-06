import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';

import {CarPrice} from '../carPrice/carPrice.component';
import {CarSpecs} from '../carSpecs/carSpecs.component';

import './car.css';

export const Car: React.FC = () => {
  const {selectedCar} = useContext(CarsContext);

  if (selectedCar) {
    return (
      <article>
        <header className="carHeader">
          <h1>
            {selectedCar.make} {selectedCar.model}
          </h1>
        </header>
        <section className="carContainer">
          <CarSpecs />
          <CarPrice />
        </section>
      </article>
    );
  }
  return null;
};
