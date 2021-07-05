import carData from '../data/carData.json';

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
      {/* price and features */}
      <div style={{display: 'flex'}}>
        <div>Price and features</div>
        <div>Car details</div>
      </div>
    </div>
  );
};
