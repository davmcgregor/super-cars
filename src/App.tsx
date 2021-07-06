import './App.css';
import {Car} from './components/car/car.component';
import {Search} from './components/search/search.component';
import CarsContextProvider from './context/CarsContext';

function App() {
  return (
    <CarsContextProvider>
      <div className="app">
        <Search />
        <Car />
      </div>
    </CarsContextProvider>
  );
}

export default App;
