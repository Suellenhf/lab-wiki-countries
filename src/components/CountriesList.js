import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';


function CountriesList() {
  return (
    <div className="col-5 list-group">
      {countries.map((country) => (
        <Link
          to={`/countries/${country.cca3}`}
          className="list-group-item list-group-item-action text-left"
        >
          {country.flag} {country.name.common}
        </Link>
      ))}
    </div>
  );
}

export default CountriesList;
