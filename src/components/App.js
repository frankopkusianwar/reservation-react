import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <h3>MAKE A ROOM RESERVATION WITH US</h3>
        <p>
          We have 500 different rooms at our main branch. Today 200 rooms are available. 
          We also have branches all over the country. If you want to find out and book from
          our different branches. Please use the selector below.
        </p>
        <div className="form">
          <select>
            <option>--select--</option>
            <option>Kampala</option>
            <option>Mbale</option>
            <option>Jinja</option>
          </select>
          <button>Book Now</button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
          <h4>OR</h4>
          <p>Sign up <Link to="/signup">Here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default App;
