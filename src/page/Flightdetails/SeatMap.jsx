import React from "react";
import seatImage from "../../assets/images/seat.png";
import { useDispatch, useSelector } from "react-redux";
import { setSeat, setSelectedTab } from "@/redux/flightSlice";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Seat Component to display seat characteristics and price
const Seat = ({ seat }) => {
  const dispatch = useDispatch();
  const selectedSeat = useSelector((state) => state.flight.selectedSeat);
  
  const {
    Column,
    SeatCode,
    Availability,
    SeatPrice: { TotalAmount, CurrencyCode },
    SeatCharacteristics,
  } = seat;

  const handleFareSelect = (seat) => {
    dispatch(setSeat({ seat }));
    setTimeout(() => {
      dispatch(setSelectedTab("meal"));
    }, 1000);
  };

  return (
    <div className={`seat ${Availability === "F" ? "available" : "unavailable"}`}>
      <TooltipProvider key={`${Column}${SeatCode}`} delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => handleFareSelect(seat)}
              type="button"
              key={`${Column}${SeatCode}`}
              className={`w-7 h-7 m-1 seatmap-seat text-xs font-bold rounded ${
                seat.occupied
                  ? "bg-red-300 border border-b-4 border-b-red-600 text-white"
                  : selectedSeat === `${Column}${SeatCode}`
                  ? "bg-green-300 border border-b-4 border-b-green-600 text-black"
                  : Availability !== "F"
                  ? "border-b-8 border border-gray-300 text-gray-400"
                  : "bg-blue-300 border border-b-4 border-b-[#0c32ff]"
              }`}
              style={{
                backgroundImage: Availability !== "F" ? `url(${seatImage})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              disabled={seat.occupied}
            >
              {Column}
              {SeatCode}
            </button>
          </TooltipTrigger>
          <TooltipContent className="border border-gray-500">
            <p>
              Seat Number <span className="font-bold">{Column}{SeatCode}</span>
            </p>
            <p>
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
      <div className="seats flex">
        {row.Seats.map((seat) => (
          <Seat key={`${seat.Column}${seat.SeatCode}`} seat={seat} />
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
