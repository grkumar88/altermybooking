import FlightSeat from './FlightSeat';
import Arrow from '../../assets/images/arrow.png';
import IconSelect from '../../assets/images/icon-select.png';
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Meals from './Meals';
import Baggage from './Baggage';

const Flights = ({}) => {
  const [selectedFlight, setSelectedFlight] = useState('outbound');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSeatSelect = (flight) => {
    if (selectedFlight === flight) {
      setSelectedFlight(null); // Deselect if the same flight is clicked again
    } else {
      setSelectedFlight(flight);
    }
  };
  
  const [seatList,setSeatList] = useState(null)

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await fetch(
          'https://d25ac222-420a-4dd3-9688-bfba567d7a16.mock.pstmn.io/api/ancillary/SeatAvailability'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch seat');
        }
        const data = await response.json();
        console.log('Flights ==> ', JSON.stringify(data?.Response.SeatMapsResponses));
        const newResponse = [
          {
              "Outbound": data?.Response.SeatMapsResponses.Outbound
          }, 
          {
              "Inbound": data?.Response.SeatMapsResponses.Inbound
          }
      ]
        const updatedData = newResponse?.map(item => {
          console.log('item', item);
          
          const key = Object.keys(item)[0]; // "Inbound" or "Outbound"
          const updatedItem = {
            ...item,
            isSeatOpen: false
          };
          console.log('updatedItem', updatedItem);
          
          return updatedItem;
        });
        console.log('updatedData', updatedData);
        
        setSeatList(updatedData); // Use the correct field for baggage data
        setLoading(false);
      } catch (error) {
        setError(error.message || 'Unknown error occurred');
        setLoading(false);
      }
    };

    fetchSeats();

  }, []);

  const flightData = data?.Response?.SeatMapsResponses;

  const toggleSeatOpen = (index) => {
    setSeatList((prevData) => {
      const newData = prevData.map((item, i) => ({
        ...item,
        isSeatOpen: i === index ? !item.isSeatOpen : false
      }));
      return newData;
    });
  };

  return (
      <div>
        {/* <div>{JSON.stringify(seatList, null, 2)}</div> */}
        {seatList?.map((list, index) => {
          const flightType = Object.keys(list)[0];
          const flightSegment = list[flightType][0].FlightSegment
          const flightRows = list[flightType][0].SeatRows
          console.log('flightType', flightType);
          console.log('flightSegment', flightSegment);
          console.log('flightRows', flightRows?.Rows);
          
          return (
            <> 
              <div className="flex justify-between p-6 bg-white rounded-xl m-5">
                <div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="bg-[#E7EDFD] text-xs px-2 py-1 rounded-xl text-[#5e76d0]">
                        { flightType}
                      </span>
                      <span className="flex items-center space-x-1">
                        <span className="ml-10">
                          {flightSegment.Departure.AirportCode}
                        </span>
                        <img src={Arrow} alt="arrow" />
                        <span>{flightSegment.Arrival.AirportCode}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="mr-3">
                        <img src={IconSelect} alt="icon" />
                      </span>
                      <p className="text-sm text-[#9f9f9f] border-r-2 border-[#9f9f9f] pr-2">
                        {flightSegment.MarketingCarrier.AirlineName}
                      </p>
                      <p className="text-sm text-[#9f9f9f]">{flightSegment.Equipment.AircraftName}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-[#FDEDE0] text-xs px-2 rounded-xl text-[#FE9E00] border-solid border border-[#FE9E00]">
                        Flight Time: {flightSegment.FlightDetail.FlightTime}
                      </span>
                      {/* <span className="bg-[#FDEDE0] text-xs px-2 rounded-xl text-[#FE9E00] border-solid border border-[#FE9E00]">
                        Window seats available
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="self-center">
                  <div className="flex space-x-2">
                    <span className="text-[#9f9f9f]">
                      {' '}
                      From <span className="text-black">
                        {' '}
                        &pound; {flightRows.GeneralSeatDetail.MinimalSeatPrice}
                      </span> /person{' '}
                    </span>
                    <button
                      onClick={() => toggleSeatOpen(index)}
                      // onClick={() => handleSeatSelect('outbound')}
                      className="bg-[#3561FF] text-md px-2 rounded-xl text-[#ffffff] border-solid border border-[#3561FF]"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              
        {list.isSeatOpen && (
          
              <div className="p-6 bg-white rounded-xl m-5">
                <Tabs defaultValue="seat" className="w-full">
                  <TabsList>
                    <TabsTrigger value="seat">Seat</TabsTrigger>
                    <TabsTrigger value="meal">Meal</TabsTrigger>
                    <TabsTrigger value="baggage">Baggage</TabsTrigger>
                  </TabsList>
                  <TabsContent value="seat"  className="w-full" >
                    <FlightSeat seatData={flightRows?.Rows} />
                  </TabsContent>
                  <TabsContent value="meal">
                    <Meals />
                  </TabsContent>
                  <TabsContent value="baggage">
                    <Baggage />
                  </TabsContent>
                </Tabs>
              </div>
        )}
            </>
           
          )
        })}
      </div>
  );
};

export default Flights;
