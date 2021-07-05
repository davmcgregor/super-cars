import React, {useContext} from 'react';

import {CarsContext} from '../../context/CarsContext';

import './carSpecs.css';

export const CarSpecs: React.FC = () => {
  const {selectedCar} = useContext(CarsContext);

  if (selectedCar) {
    return (
      <div className="carSpecsWrapper">
        <div className="carSpecsSections">
          <div className="carSpecsHeaders">
            <div>Fuel</div>
            <div>Shift</div>
            <div>Color</div>
          </div>
          <div className="carSpecsItems">
            <div>{selectedCar.fuelType}</div>
            <div>{selectedCar.shiftType}</div>
            <div>{selectedCar.colour}</div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
