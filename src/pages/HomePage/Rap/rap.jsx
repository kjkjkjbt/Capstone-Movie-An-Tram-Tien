import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ListGhe from '../../ScreenPage/ListGhe/ListGhe';
import Ticket from '../../ScreenPage/Ticket'


const rap = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (maGhe) => {
    if (selectedSeats.includes(maGhe)) {
      setSelectedSeats(selectedSeats.filter((ghe) => ghe !== maGhe));
    } else {
      setSelectedSeats([...selectedSeats, maGhe]);
    }
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Movie Ticket Booking</h1>
        <Switch>
          <Route path="/" exact>
            <div className="flex flex-wrap">
              {[...Array(20).keys()].map((num) => (
                <Seat
                  key={num}
                  maGhe={num + 1}
                  isSelected={selectedSeats.includes(num + 1)}
                  onSelect={handleSeatSelect}
                />
              ))}
            </div>
            <Link
              to="/ticket"
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md inline-block"
            >
              Continue
            </Link>
          </Route>
          <Route path="/ticket">
            <Ticket selectedSeats={selectedSeats} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default rap;
