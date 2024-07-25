import FlightSeat from './FlightSeat';
import Arrow from '../../assets/images/arrow.png';
import IconSelect from '../../assets/images/icon-select.png';
import { useState } from 'react';

type Props = {};

const Flights = ({}: Props) => {
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);

  const handleSeatSelect = (flight: string) => {
    if (selectedFlight === flight) {
      setSelectedFlight(null); // Deselect if the same flight is clicked again
    } else {
      setSelectedFlight(flight);
    }
  };

  return (
    <div>
      <div className="flex justify-between p-6 bg-white rounded-xl m-5">
        <div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="bg-[#E7EDFD] text-xs px-2 py-1 rounded-xl text-[#5e76d0]">
                Outbound{' '}
              </span>
              <span className="flex items-center space-x-1">
                <span className="ml-10">London</span>
                <img src={Arrow} alt="arrow" />
                <span>New Delhi</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="mr-3">
                <img src={IconSelect} alt="icon" />
              </span>
              <p className="text-sm text-[#9f9f9f] border-r-2 border-[#9f9f9f] pr-2">
                Vista
              </p>
              <p className="text-sm text-[#9f9f9f]">Boeing 787-9</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-[#FDEDE0] text-xs px-2 rounded-xl text-[#FE9E00] border-solid border border-[#FE9E00]">
                Flight Time: 8h 5m{' '}
              </span>
              <span className="bg-[#FDEDE0] text-xs px-2 rounded-xl text-[#FE9E00] border-solid border border-[#FE9E00]">
                Window seats available
              </span>
            </div>
          </div>
        </div>
        <div className="self-center">
          <div className="flex space-x-2">
            <span className="text-[#9f9f9f]">
              {' '}
              From <span className="text-black"> &pound;1.70</span> /person{' '}
            </span>
            <button
              onClick={() => handleSeatSelect('outbound')}
              className="bg-[#3561FF] text-md px-2 rounded-xl text-[#ffffff] border-solid border border-[#3561FF]"
            >
              Select
            </button>
          </div>
        </div>
      </div>

      {selectedFlight === 'outbound' && (
        <div className="p-6 bg-white rounded-xl m-5">
          <FlightSeat />
        </div>
      )}

      <div className="flex justify-between p-6 bg-white rounded-xl m-5">
        <div className="mb-5">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="bg-[#E7EDFD] text-xs px-2 py-1 rounded-xl text-[#5e76d0]">
                Inbound{' '}
              </span>
              <span className="flex items-center space-x-1">
                <span className="ml-10">New Delhi</span>
                <img src={Arrow} alt="arrow" />
                <span>London</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="mr-3">
                <img src={IconSelect} alt="icon" />
              </span>
              <p className="text-sm text-[#9f9f9f] border-r-2 border-[#9f9f9f] pr-2">
                Vista
              </p>
              <p className="text-sm text-[#9f9f9f]">Boeing 787-9</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-[#FDEDE0] text-xs px-2 rounded-xl text-[#FE9E00] border-solid border border-[#FE9E00]">
                Flight Time: 8h 5m{' '}
              </span>
              <span className="bg-[#FDEDE0] text-xs px-2 rounded-xl text-[#FE9E00] border-solid border border-[#FE9E00]">
                Window seats available
              </span>
            </div>
          </div>
        </div>
        <div className="self-center">
          <div className="flex space-x-2">
            <span className="text-[#9f9f9f]">
              {' '}
              From <span className="text-black"> &pound;1.70</span> /person{' '}
            </span>
            <button
              onClick={() => handleSeatSelect('inbound')}
              className="bg-[#3561FF] text-md px-2 rounded-xl text-[#ffffff] border-solid border border-[#3561FF]"
            >
              Select
            </button>
          </div>
        </div>
      </div>

      {selectedFlight === 'inbound' && (
        <div className="p-6 bg-white rounded-xl m-5">
          <FlightSeat />
        </div>
      )}
    </div>
  );
};

export default Flights;
