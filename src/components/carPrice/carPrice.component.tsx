import carData from '../../data/carData.json';
import './carPrice.css';

const car = carData[0];

export const CarPrice: React.FC = () => {
  return (
    <div className="carPrice">
      <h2>
        {car.price.toLocaleString('en-AU', {
          style: 'currency',
          currency: 'AUD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })}
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
