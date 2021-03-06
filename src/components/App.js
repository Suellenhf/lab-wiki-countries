import './App.css';
// Switch não deixa dar match nas rotas
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import countries from '../countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container row">
        <CountriesList countries={countries} />
        <Route path="/countries/:countryName" component={CountryDetails} />
      </div>
    </div>
  );
}

export default App;
