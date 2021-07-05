import carData from '../data/carData.json';
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
        {/* carDetails */}
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
        {/* carPrice */}
        <div className="carPrice">
          <h2>${car.price}</h2>
          {car.features.map((feature, index) => (
            <span key={index}>
              {feature}
              {index !== car.features.length - 1 && ' - '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
