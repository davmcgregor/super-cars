import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';

import './carSpecs.css';

export const CarSpecs: React.FC = () => {
  const {selectedCar} = useContext(CarsContext);
  const headers = ['Fuel', 'Shift', 'Color'];
  const items = [
    selectedCar.fuelType,
    selectedCar.shiftType,
    selectedCar.colour,
  ];

  if (selectedCar) {
    return (
      <div className="specsContainer">
        <div className="specsWrapper">
          <div className="specsHeaders">
            {headers.map((header, key) => (
              <div key={key}>{header}</div>
            ))}
          </div>
          <div className="specsItems">
            {items.map((item, key) => (
              <div key={key}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
};
