import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';

import './CarSpecs.css';

export const CarSpecs: React.FC = () => {
  const {selectedCar} = useContext(CarsContext);

  const headers = ['Fuel', 'Shift', 'Colour'];
  const items = [
    selectedCar.fuelType,
    selectedCar.shiftType,
    selectedCar.colour,
  ];

  if (selectedCar) {
    return (
      <div className="specsContainer">
        <div className="specsWrapper">
          <div className="specsHeaders" role="list">
            {headers.map((header: string, key: number) => (
              <div key={key} role="listitem">
                {header}
              </div>
            ))}
          </div>
          <div className="specsItems" role="list">
            {items.map((item: string, key: number) => (
              <div key={key} role="listitem">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
};
