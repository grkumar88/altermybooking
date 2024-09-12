import React, { useState, useEffect } from 'react';
import seatImage from '../../assets/images/seat.png';
import FareDetails from './FareDetails';
import { useDispatch } from 'react-redux';
import { setSeat } from '@/redux/flightSlice';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const SeatingArrangement = ({ data }) => {
  const dispatch = useDispatch();
  // const [seatList,setSeatList] = useState(null)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   const fetchSeats = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://d25ac222-420a-4dd3-9688-bfba567d7a16.mock.pstmn.io/api/ancillary/SeatAvailability'
  //       );
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch seat');
  //       }
  //       const data = await response.json();
  //       console.log('Data ==> ', data?.Response.SeatMapsResponses);
  //       setSeatList(data?.Response.SeatMapsResponses); // Use the correct field for baggage data
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message || 'Unknown error occurred');
  //       setLoading(false);
  //     }
  //   };

  //   fetchSeats();

  // console.log('seat data', seatList);
  // }, []);

  const seating_arrangement = {
    
  };

  const [inbond, setInbond] = useState({
    // Initialize with your inbound data
  });

  const [selectRow, setSelectRow] = useState(seating_arrangement.Inbound?.[0]?.SeatRows?.Rows || []);




const [activeSeat, setActiveSeat] = useState(null);

  const handleFareSelect = (seat) => {
    setActiveSeat(seat.seat_number === activeSeat ? null : seat.seat_number);
    dispatch(setSeat({ seat }));
  };

  // const handleSelectseat = () => {
  //   dispatch(setSeat({seatnumber: }))
  // };

  return (
    <>
      <div className="flex flex-col gap-y-2 ">
        {data.Rows.map((row, index) => (
          <div>{index}</div>
        ))}
      </div>
      <div className="w-1/3">
        {activeSeat && (
          <FareDetails
            classname={
              'absolute bg-white right-100 top-10 ml-40  inline-block p-4 border rounded w-60'
            }
          />
        )}
      </div>
    </>
  );
};

export default SeatingArrangement;
