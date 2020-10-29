import React from 'react';

const App = () => {
  return (
    <div className="App">
      <h3>MAKE A ROOM RESERVATION WITH US</h3>
      <p>
        We 500 different rooms at our main branch. Today 200 rooms are available. 
        We also have branches all over the country. If you want to find out and book from
        our different branches. Please use the selector below.
      </p>
      <div>
        <select>
          <option>--select--</option>
          <option>location 1</option>
        </select>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default App;
