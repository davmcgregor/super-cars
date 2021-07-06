import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';

import {formatter} from '../../utils/utils';

import './carPrice.css';

export const CarPrice: React.FC = () => {
  const {selectedCar} = useContext(CarsContext);

  if (selectedCar) {
    return (
      <div className="priceContainer">
        <h2>{formatter(selectedCar.price)}</h2>
        <div className="featuresWrapper">
          {selectedCar.features.map((feature: string, index: number) => (
            <span key={index}>
              {feature}
              {index !== selectedCar.features.length - 1 && ' - '}
            </span>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
