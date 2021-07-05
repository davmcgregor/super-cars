import carData from '../../data/carData.json';
import {formatter} from '../../utils/utils'
import './carPrice.css';

const car = carData[0];

export const CarPrice: React.FC = () => {
  return (
    <div className="carPriceWrapper">
      <h2>
        {formatter(car.price)}
      </h2>
      {car.features.map((feature, index) => (
        <span key={index}>
          {feature}
          {index !== car.features.length - 1 && ' - '}
        </span>
      ))}
    </div>
  );
};
