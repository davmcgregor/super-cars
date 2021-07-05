import './App.css';
import {CarComponent} from './components/cars/car.component';
import {SearchComponent} from './components/search/search.component';
import CarsContextProvider from './context/CarsContext';

function App() {
  return (
    <CarsContextProvider>
      <div className="app">
        <SearchComponent />
        <CarComponent />
      </div>
    </CarsContextProvider>
  );
}

export default App;
