import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';

import {CarPrice} from '../CarPrice/CarPrice';
import {CarSpecs} from '../CarSpecs/CarSpecs';

import './Car.css';

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
