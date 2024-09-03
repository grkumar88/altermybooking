import { useDispatch } from 'react-redux';
import FareDetails from './FareDetails'; // Adjust the import path as needed
import { setBaggage } from '@/redux/flightSlice';

// BaggageCard Component
const BaggageCard = ({ title, description, weight, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col justify-between max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-500 mb-4">Weight: {weight}</p>
        <div className="text-xl font-bold text-green-500">{price}</div>
      </div>
      <button
        onClick={() => {
          dispatch(setBaggage({ baggage: price }));
        }}
        className="border  bg-green-700 text-white uppercase font-bold rounded-xl px-5 py-3 m-4"
      >
        Select
      </button>
    </div>
  );
};

// BaggageGrid Component
const BaggageGrid = () => {
  const baggageOptions = [
    {
      title: 'Checked-in Baggage',
      description: 'Standard checked-in baggage allowance.',
      weight: 'Up to 15 kg',
      price: 20,
      selected: false,
    },
    {
      title: 'Additional Checked-in Baggage',
      description: 'Additional baggage allowance for your trip.',
      weight: 'Up to 10 kg extra',
      price: 50,
      selected: false,
    },
    {
      title: 'Carry More On-board',
      description: 'Carry more items with you on-board.',
      weight: 'Up to 7 kg',
      price: 70,
      selected: false,
    },
  ];

  return (
    <div className="flex">
      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {baggageOptions.map((baggage, index) => (
          <BaggageCard
            key={index}
            title={baggage.title}
            description={baggage.description}
            weight={baggage.weight}
            price={baggage.price}
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
