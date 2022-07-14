import './App.css';
import Home from './components/Home';
import YourCard from './components/YourCard';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/your-card' component={YourCard} />
      <Route exact path = '/blocked' component={YourCard} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
