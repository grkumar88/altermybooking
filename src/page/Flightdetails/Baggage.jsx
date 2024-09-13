import { useDispatch } from 'react-redux';
import FareDetails from './FareDetails'; // Adjust the import path as needed
import { setBaggage } from '@/redux/flightSlice';
import { useState, useEffect } from 'react';

// BaggageCard Component
const BaggageCard = ({ title, description, weight, price, selected, onSelect }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`w-full flex flex-col justify-between max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden border border-gray-200 ${
        selected ? 'bg-green-100' : 'bg-white'
      }`} // Change background color when selected
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-500 mb-4">Weight: {weight}</p>
        <div className="text-xl font-bold text-red-500">£{price}</div>
      </div>
      <button
        onClick={() => {
          dispatch(setBaggage({ baggage: price, baggageName: title }));
          onSelect(); // Call the onSelect function passed as a prop
        }}
        className="border bg-green-700 text-white uppercase font-bold rounded-xl px-5 py-3 m-4"
      >
        Select
      </button>
    </div>
  );
};

// BaggageGrid Component
const BaggageGrid = () => {
  const [baggageList, setBaggageList] = useState(null);
  const [selectedBaggage, setSelectedBaggage] = useState(null); // Track selected baggage

  useEffect(() => {
    const fetchBaggages = async () => {
      try {
        const response = await fetch(
          'https://d25ac222-420a-4dd3-9688-bfba567d7a16.mock.pstmn.io/api/ancillary/MealsBaggages'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch baggage');
        }
        const data = await response.json();
        console.log('UpsellBaggages ==> ', data?.Response[0].UpsellBaggages);
        setBaggageList(data?.Response[0].UpsellBaggages); // Use the correct field for baggage data
      } catch (error) {
        console.error(error.message || 'Unknown error occurred');
      }
    };

    fetchBaggages();
  }, []);

  return (
    <div className="flex">
      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {baggageList?.map((baggage, index) => (
          <BaggageCard
            key={index}
            title={baggage.Name}
            description={baggage.Description}
            weight={0} // Update if weight is available
            price={baggage.Amount.TotalAmount}
            selected={selectedBaggage === index} // Check if this baggage is selected
            onSelect={() => setSelectedBaggage(index)} // Update the selected baggage index
          />
        ))}
      </div>

      <div className="w-1/4">
        <FareDetails
          classname={
            'bg-white ml-10 right-100 inline-block p-4 border rounded w-80'
          }
        />
      </div>
    </div>
  );
};

export default BaggageGrid;
