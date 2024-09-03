import SeatingArrangement from './SeatingArrangement';
import FlightBg from '../../assets/images/flight_bgg.png';
import Xlseatmap from '../../assets/images/XLseatmap.png';
import Nonrecliner from '../../assets/images/nonrecliner.png';
import Exitrowseat from '../../assets/images/emergencyexit.png';

const FlightSeat = ({}) => {
  const seating_arrangement = {
    1: [
      {
        seat_number: '1A',
        type: 'window',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '1B',
        type: 'aisle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '1C',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '1D',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '1E',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '1F',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '1G',
        type: 'aisle',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '1H',
        type: 'window',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
    2: [
      {
        seat_number: '2A',
        type: 'window',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '2B',
        type: 'aisle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '2C',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '2D',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '2E',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '2F',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '2G',
        type: 'aisle',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '2H',
        type: 'window',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
    3: [
      {
        seat_number: '3A',
        type: 'window',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '3B',
        type: 'aisle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '3C',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '3D',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '3E',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '3F',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '3G',
        type: 'aisle',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '3H',
        type: 'window',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
    4: [
      {
        seat_number: '4A',
        type: 'window',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '4B',
        type: 'aisle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '4C',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '4D',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '4E',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '4F',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '4G',
        type: 'aisle',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '4H',
        type: 'window',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
    5: [
      {
        seat_number: '5A',
        type: 'window',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '5B',
        type: 'aisle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '5C',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '5D',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '5E',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '5F',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '5G',
        type: 'aisle',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '5H',
        type: 'window',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
    6: [
      {
        seat_number: '6A',
        type: 'window',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '6B',
        type: 'aisle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '6C',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '6D',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '6E',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '6F',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '6G',
        type: 'aisle',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '6H',
        type: 'window',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
    7: [
      {
        seat_number: '7A',
        type: 'window',
        side: 'left',
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '7B',
        type: 'aisle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '7C',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '7D',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '7E',
        type: 'middle',
        side: 'center',
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '7F',
        type: 'aisle',
        side: 'center',
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '7G',
        type: 'aisle',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '7H',
        type: 'window',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
    8: [
      {
        seat_number: '8A',
        type: 'window',
        side: 'left',
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '8B',
        type: 'aisle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '8C',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '8D',
        type: 'middle',
        side: 'center',
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '8E',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '8F',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '8G',
        type: 'aisle',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '8H',
        type: 'window',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
    9: [
      {
        seat_number: '9A',
        type: 'window',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '9B',
        type: 'aisle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '9C',
        type: 'aisle',
        side: 'center',
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '9D',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '9E',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '9F',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '9G',
        type: 'aisle',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '9H',
        type: 'window',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
    10: [
      {
        seat_number: '10A',
        type: 'window',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '10B',
        type: 'aisle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '10C',
        type: 'aisle',
        side: 'center',
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '10D',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '10E',
        type: 'middle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '10F',
        type: 'aisle',
        side: 'center',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '10G',
        type: 'aisle',
        side: 'right',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
      {
        seat_number: '10H',
        type: 'window',
        side: 'right',
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
  };

  return (
    <>
      <div className="relative">
        <div className="bg-white border border-gray-300 rounded-xl p-4 ml-8 absolute top-60 w-44">
          <ul className="space-y-4">
            <li className="flex items-center gap-4 mb-2">
              <span
                className="w-4 h-4"
                style={{ backgroundColor: 'rgb(80, 227, 194)' }}
              ></span>
              <span className="text-xs">Free</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <span
                className="w-4 h-4"
                style={{ backgroundColor: 'rgb(186, 218, 255)' }}
              ></span>
              <span className="text-xs">£ 1000-2000</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <span
                className="w-4 h-4"
                style={{ backgroundColor: 'rgb(201, 186, 255)' }}
              ></span>
              <span className="text-xs">£ 1300-2400</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <span
                className="w-4 h-4 bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${Exitrowseat})`,
                }}
              ></span>
              <span className="text-xs">Exit Row Seats</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <span
                className="w-4 h-4 bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${Nonrecliner})`,
                }}
              ></span>
              <span className="text-xs">Non Reclining</span>
            </li>
            <li className="flex items-center gap-4">
              <span
                className="w-4 h-4 bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${Xlseatmap})`,
                }}
              ></span>
              <span className="text-xs">Extra Legroom</span>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex self-center justify-center bg-[#e9eeff]">
        <div className="bg-[#e9eeff] p-5">
          <div
            className="relative w-full mb-5"
            style={{ paddingBottom: '43.7%' }}
          >
            <img src={FlightBg} alt="Background Image" className="rounded-lg" />
            <div className="absolute top-40 left-0 w-full flex items-center justify-center mt-10">
              <SeatingArrangement data={seating_arrangement} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSeat;
