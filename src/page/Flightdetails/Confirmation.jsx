import React from 'react';

const Confirmation = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        {/* Booking Confirmation */}
        <div className="text-center mb-4">
          <p className="text-gray-500 uppercase text-sm tracking-wider">
            Booking Confirmed
          </p>
          <p className="text-gray-800 font-semibold">
            Confirmation code: <span className="text-purple-700">P7ETN3</span>
          </p>
        </div>

        {/* Flight Info */}
        <div className="text-center border-b border-gray-200 pb-4 mb-4">
          <p className="text-gray-700">
            <span className="font-semibold">Flight</span> BA 806
          </p>
          <p className="text-gray-500">Date 08.09.22</p>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block w-6 h-6 bg-gray-300 rounded-full mr-2"></span>
            <p className="text-gray-600">3h 21m</p>
          </div>
        </div>

        {/* Departure and Arrival */}
        <div className="grid grid-cols-2 gap-4 text-center mb-4">
          <div>
            <p className="text-xl font-bold">BCN</p>
            <p className="text-gray-500">Barcelona</p>
            <p className="text-gray-400 text-sm">Terminal 1</p>
            <p className="text-gray-800">21:35h</p>
          </div>
          <div>
            <p className="text-xl font-bold">LHR</p>
            <p className="text-gray-500">London</p>
            <p className="text-gray-400 text-sm">Terminal 4</p>
            <p className="text-gray-800">22:50h</p>
          </div>
        </div>

        <p className="text-gray-400 text-center mb-4 text-sm">
          Operated by Iberia
        </p>

        {/* Passenger Info */}
        <div className="grid grid-cols-2 gap-4 text-center border-t border-gray-200 pt-4">
          <div>
            <p className="text-gray-500">Passenger</p>
            <p className="font-semibold">Tony Stark</p>
          </div>
          <div>
            <p className="text-gray-500">Baggage</p>
            <p className="font-semibold">1</p>
          </div>
          <div>
            <p className="text-gray-500">Class</p>
            <p className="font-semibold">Economy</p>
          </div>
          <div>
            <p className="text-gray-500">Seat</p>
            <p className="font-semibold">14E</p>
          </div>
        </div>

        {/* Trip Receipt */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <p className="text-gray-500 text-center mb-2">Your trip receipt</p>
          <div className="flex justify-between text-gray-800">
            <p>Fare</p>
            <p>£95.00</p>
          </div>
          <div className="flex justify-between text-gray-800">
            <p>Fees & Taxes</p>
            <p>£7.90</p>
          </div>
          <div className="flex justify-between font-semibold text-gray-800">
            <p>Total</p>
            <p>£102.90</p>
          </div>
        </div>

        <p className="text-gray-400 text-xs text-center mt-4">
          Change allowed at any time with a penalty of £65, except in case of
          no-show. No refunds.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
