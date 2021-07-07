import './App.css';
import {Car} from './components/car/car.component';
import {Search} from './components/search/search.component';
import CarsContextProvider from './context/CarsContext';

const App = () => {
  return (
    <CarsContextProvider>
      <main className="app">
        <Search />
        <Car />
      </main>
    </CarsContextProvider>
  );
}

export default App;
