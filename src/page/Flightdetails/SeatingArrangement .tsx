import React, { useState } from 'react';
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

interface Seat {
  seat_number: string;
  type: string;
  side: string;
  occupied: boolean;
  seatfare: number;
}

interface SeatingArrangementProps {
  data: Record<number, Seat[]>;
}

const SeatingArrangement: React.FC<SeatingArrangementProps> = ({ data }) => {
  const dispatch = useDispatch();

  const [activeSeat, setActiveSeat] = useState<string | null>(null);

  const handleFareSelect = (seat: Seat) => {
    setActiveSeat(seat.seat_number === activeSeat ? null : seat.seat_number);
    dispatch(setSeat({ seat }));
  };

  // const handleSelectseat = () => {
  //   dispatch(setSeat({seatnumber: }))
  // };

  return (
    <>
      <div className="flex flex-col gap-y-2">
        {Object.keys(data).map((row) => (
          <div key={row} className="flex  ">
            {['left'].map((side) => (
              <div key={side} className=" flex space-x-2 ">
                {data[Number(row)]
                  .filter((seat) => seat.side === side)
                  .map((seat) => (
                    <TooltipProvider key={seat.seat_number} delayDuration={300}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            // className={`seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded ${
                            //   seat.occupied ? 'bg-gray-300' : ''
                            // }`}
                            // onClick={() => dispatch(setSeat({ seat }))}
                            onClick={() => handleFareSelect(seat)}
                            type="button"
                            key={seat.seat_number}
                            className={` w-12 h-12 seatmap-seat border-b-8 border border-blue-300 text-blue-300 font-bold py-2 px-3 rounded ${
                              seat.occupied
                                ? 'border-b-8 border border-gray-300 text-gray-400'
                                : activeSeat === seat.seat_number
                                ? 'bg-blue-300 text-white'
                                : 'hover:bg-blue-300 hover:text-white'
                            }`}
                            style={{
                              backgroundImage: seat.occupied
                                ? `url(${seatImage})`
                                : 'none',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                            disabled={seat.occupied}
                          >
                            {seat.seat_number}
                          </button>
                        </TooltipTrigger>

                        {seat.occupied ? (
                          <TooltipContent>
                            <p className="bg-cyan-500 text-white p-3">
                              Sorry, this seat is taken
                            </p>
                          </TooltipContent>
                        ) : (
                          <TooltipContent>
                            <p className="bg-cyan-500 text-white p-3">
                              Seat Number {seat.seat_number}
                            </p>
                            <p className="bg-cyan-500 text-white p-3">
                              Price: £ {seat.seatfare}
                            </p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                {/* </div>*/}
              </div>
            ))}
          </div>
        ))}
      </div>

      {activeSeat && <FareDetails />}
    </>
  );
};

export default SeatingArrangement;
