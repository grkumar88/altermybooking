import React from "react";
import seatImage from "../../assets/images/seat.png";
import { useDispatch } from "react-redux";
import { setSeat } from "@/redux/flightSlice";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// Seat Component to display seat characteristics and price
const Seat = ({ seat }) => {
  console.log("Seat ==> ", seat);
  const dispatch = useDispatch();
  const {
    Column,
    SeatCode,
    Availability,
    SeatPrice: { TotalAmount, CurrencyCode },
    SeatCharacteristics,
  } = seat;

  const handleFareSelect = (seat) => {
    dispatch(setSeat({ seat }));
  }

  return (
    <div className={`seat ${Availability === "F" ? "available" : "unavailable"}`}>
      {/* <div className="seat-column">
        <strong>Seat {Column}</strong>
      </div> */}
      <TooltipProvider key={`${Column}${SeatCode}`} delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => handleFareSelect(seat)}
              type="button"
              key={seat.seat_number}
              className={` w-7 h-7 m-1 seatmap-seat text-xs text-black font-bold  rounded ${
                Availability !== "F"
                  ? 'border-b-8 border border-gray-300 text-gray-400'
                  // : activeSeat === seat.seat_number
                  : 'bg-blue-300  border border-b-4 border-b-[#0c32ff]'
                  // : 'hover:bg-blue-300 hover:text-white'
              }`}
              style={{
                backgroundImage: Availability !== "F"
                  ? `url(${seatImage})`
                  : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              disabled={seat.occupied}
            >
              {Column}{SeatCode}
            </button>
          </TooltipTrigger>
          <TooltipContent className="border border-gray-500">
            <p className="">
              Seat Number  <span className="font-bold ">{Column}{SeatCode}</span>
            </p>
            <p className="">
              Price: <span className="font-bold">{CurrencyCode} {TotalAmount}</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
     
    </div>
  );
};

// SeatRow Component to display a row of seats
const SeatRow = ({ row }) => {
  return (
    <div className="seat-row">
      {/* <h3>Row {row.RowNumber}</h3> */}
      <div className="seats flex">
        {row.Seats.map((seat) => (
          <Seat key={seat.Column} seat={seat} />
        ))}
      </div>
    </div>
  );
};

// SeatMap Component to render the entire seat map
const SeatMap = ({ data }) => {
  return (
    <div className="seat-map">
      {data.map((row) => (
        <SeatRow key={row.RowNumber} row={row} />
      ))}
    </div>
  );
};

export default SeatMap;