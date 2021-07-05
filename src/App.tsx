import './App.css';
import {CarComponent} from './components/cars/car.component';
import {SearchComponent} from './components/search/search.component';

function App() {
  return (
    <div className="app">
      <SearchComponent />
      <CarComponent />
    </div>
  );
}

export default App;
