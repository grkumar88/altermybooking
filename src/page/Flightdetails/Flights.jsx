import FlightSeat from './FlightSeat';
import Arrow from '../../assets/images/arrow.png';
import IconSelect from '../../assets/images/icon-select.png';
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Meals from './Meals';
import Baggage from './Baggage';

const Flights = ({}) => {
  // const [selectedFlight, setSelectedFlight] = useState<string | null>('outbound');
  const [selectedFlight, setSelectedFlight] = useState('outbound');

  // const [data, setData] = useState<ApiResponse | null>(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSeatSelect = (flight) => {
    if (selectedFlight === flight) {
      setSelectedFlight(null); // Deselect if the same flight is clicked again
    } else {
      setSelectedFlight(flight);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://d25ac222-420a-4dd3-9688-bfba567d7a16.mock.pstmn.io/api/ancillary/SeatAvailability',
          {
            method: 'POST', // Use POST method
            headers: {
              'Content-Type': 'application/json', // Set content type if sending JSON data
            },
            body: JSON.stringify({
              PNRNo: 'TEGXTI',
              Passengers: [
                {
                  PassengerID: 'T2',
                  PTC: 'ADT',
                  NameTitle: 'Mr',
                  GivenName: 'FNTESTA',
                  SurName: 'LNTESTA',
                  Gender: 'Male',
                  Birthdate: '1991-06-29',
                },
                {
                  PassengerID: 'T2',
                  PTC: 'CHD',
                  NameTitle: 'Miss',
                  GivenName: 'Jane',
                  SurName: 'Doe',
                  Gender: 'F',
                  Birthdate: '2005-06-15',
                },
              ],
            }),
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        // setError(err.message);
      }
    };

    // fetchData();
  }, []);

  const flightData = data?.Response?.SeatMapsResponses;

  return (
    <div>
      {/* <pre>{JSON.stringify(flightData, undefined,2)}</pre> */}

      <div>
        {flightData?.map((list) => (
          <div className="flex justify-between p-6 bg-white rounded-xl m-5">
            <div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#E7EDFD] text-xs px-2 py-1 rounded-xl text-[#5e76d0]">
                    Outbound{' '}
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="ml-10">
                      {list?.FlightSegment?.Arrival?.AirportCode}
                    </span>
                    <img src={Arrow} alt="arrow" />
                    <span>{list?.FlightSegment?.Departure?.AirportCode}</span>
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
                  From <span className="text-black">
                    {' '}
                    &pound;1.70
                  </span> /person{' '}
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
        ))}
      </div>

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
        <>
          <div className="p-6 bg-white rounded-xl m-5">
            <Tabs defaultValue="seat" className="w-full">
              <TabsList>
                <TabsTrigger value="seat">Seat</TabsTrigger>
                <TabsTrigger value="meal">Meal</TabsTrigger>
                <TabsTrigger value="baggage">Baggage</TabsTrigger>
              </TabsList>
              <TabsContent value="seat" className="w-full">
                <FlightSeat />
              </TabsContent>
              <TabsContent value="meal">
                <Meals />
              </TabsContent>
              <TabsContent value="baggage">
                <Baggage />
              </TabsContent>
            </Tabs>
          </div>
        </>
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
        <>
          <div className="p-6 bg-white rounded-xl m-5">
            <Tabs defaultValue="seat" className="w-full">
              <TabsList>
                <TabsTrigger value="seat">Seat</TabsTrigger>
                <TabsTrigger value="meal">Meal</TabsTrigger>
                <TabsTrigger value="baggage">Baggage</TabsTrigger>
              </TabsList>
              <TabsContent value="seat" className="w-full">
                <FlightSeat />
              </TabsContent>
              <TabsContent value="meal">
                <Meals />
              </TabsContent>
              <TabsContent value="baggage">
                <Baggage />
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}
    </div>
  );
};

export default Flights;
