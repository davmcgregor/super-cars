import carData from '../../data/carData.json';
import './carSpecs.css';

const car = carData[0];

export const CarSpecs: React.FC = () => {
  return (
    <div className="carSpecsWrapper">
      <div className="carSpecsSections">
        <div className="carSpecsHeaders">
          <div>Fuel</div>
          <div>Shift</div>
          <div>Color</div>
        </div>
        <div className="carSpecsItems">
          <div>{car.fuelType}</div>
          <div>{car.shiftType}</div>
          <div>{car.colour}</div>
        </div>
      </div>
    </div>
  );
};
