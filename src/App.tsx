import './App.css';
import {Car} from './components/Car/Car';
import {Search} from './components/Search/Search';
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
