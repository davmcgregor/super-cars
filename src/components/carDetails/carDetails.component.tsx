import carData from '../../data/carData.json';
import './carDetails.css';

const car = carData[0];

export const CarDetails: React.FC = () => {
  return (
    <div className="carDetails">
      <div className="carDetailsWrapper">
        <div className="carDetailsHeaders">
          <div>Fuel</div>
          <div>Shift</div>
          <div>Color</div>
        </div>
        <div className="carDetailsItems">
          <div>{car.fuelType}</div>
          <div>{car.shiftType}</div>
          <div>{car.colour}</div>
        </div>
      </div>
    </div>
  );
};
