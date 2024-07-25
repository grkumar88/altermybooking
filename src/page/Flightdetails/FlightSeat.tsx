import SeatingArrangement from './SeatingArrangement ';
import FlightBg from '../../assets/images/flight_bgg.png';

type Props = {};

const FlightSeat = ({}: Props) => {
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
        type: 'middle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '1C',
        type: 'aisle',
        side: 'left',
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
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '2B',
        type: 'middle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '2C',
        type: 'aisle',
        side: 'left',
        occupied: true,
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
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '3B',
        type: 'middle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '3C',
        type: 'aisle',
        side: 'left',
        occupied: true,
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
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '4B',
        type: 'middle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '4C',
        type: 'aisle',
        side: 'left',
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
        type: 'middle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '5C',
        type: 'aisle',
        side: 'left',
        occupied: true,
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
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '6B',
        type: 'middle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '6C',
        type: 'aisle',
        side: 'left',
        occupied: true,
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
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '7B',
        type: 'middle',
        side: 'left',
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '7C',
        type: 'aisle',
        side: 'left',
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
        type: 'middle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '8C',
        type: 'aisle',
        side: 'left',
        occupied: true,
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
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '9B',
        type: 'middle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '9C',
        type: 'aisle',
        side: 'left',
        occupied: true,
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
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 500,
      },
      {
        seat_number: '10B',
        type: 'middle',
        side: 'left',
        occupied: false,
        basicfare: 4000,
        tax: 450,
        seatfare: 0,
      },
      {
        seat_number: '10C',
        type: 'aisle',
        side: 'left',
        occupied: true,
        basicfare: 4000,
        tax: 450,
        seatfare: 300,
      },
    ],
    // Add more rows as needed
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
                  backgroundImage:
                    'url(https://imgak.mmtcdn.com/flights/assets/media//dt/rta_assets/emergency_exit_row_new.png)',
                }}
              ></span>
              <span className="text-xs">Exit Row Seats</span>
            </li>
            <li className="flex items-center gap-4 mb-2">
              <span
                className="w-4 h-4 bg-no-repeat bg-cover"
                style={{
                  backgroundImage:
                    'url(https://imgak.mmtcdn.com/flights/assets/media//dt/rta_assets/non_recliner_seats.png)',
                }}
              ></span>
              <span className="text-xs">Non Reclining</span>
            </li>
            <li className="flex items-center gap-4">
              <span
                className="w-4 h-4 bg-no-repeat bg-cover"
                style={{
                  backgroundImage:
                    'url(https://imgak.mmtcdn.com/flights/assets/media/dt/ancillaries/legends/XL.png)',
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
              {/* <div className=" flex flex-col space-y-8">
              <div className="flex flex-col gap-y-2 ">
                <div
                  aria-label="window standard Seat 3F available"
                  className="seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded"
                  style={{ zIndex: 10 }}
                  data-coords="(13, 5)"
                >
                  3F
                </div>
                <div
                  aria-label="window standard Seat 3F available"
                  className="seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded"
                  style={{ zIndex: 10 }}
                  data-coords="(13, 5)"
                >
                  3F
                </div>
                <div
                  aria-label="window standard Seat 3F available"
                  className="seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded"
                  style={{ zIndex: 10 }}
                  data-coords="(13, 5)"
                >
                  3F
                </div>
              </div>

              <div className="flex flex-col gap-y-2 ">
                <div
                  aria-label="window standard Seat 3F available"
                  className="seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded"
                  style={{ zIndex: 10 }}
                  data-coords="(13, 5)"
                >
                  3F
                </div>
                <div
                  aria-label="window standard Seat 3F available"
                  className="seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded"
                  style={{ zIndex: 10 }}
                  data-coords="(13, 5)"
                >
                  3F
                </div>
                <div
                  aria-label="window standard Seat 3F available"
                  className="seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded"
                  style={{ zIndex: 10 }}
                  data-coords="(13, 5)"
                >
                  3F
                </div>
              </div>

              <div className="flex flex-col gap-y-2 ">
                <div
                  aria-label="window standard Seat 3F available"
                  className="seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded"
                  style={{ zIndex: 10 }}
                  data-coords="(13, 5)"
                >
                  3F
                </div>
                <div
                  aria-label="window standard Seat 3F available"
                  className="seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded"
                  style={{ zIndex: 10 }}
                  data-coords="(13, 5)"
                >
                  3F
                </div>
                <div
                  aria-label="window standard Seat 3F available"
                  className="seatmap-seat border-r-8 border border-blue-300 hover:bg-blue-700 text-blue-300 hover:border-blue-700 font-bold py-2 px-3 rounded"
                  style={{ zIndex: 10 }}
                  data-coords="(13, 5)"
                >
                  3F
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>

    

      {/* <section className="inline-block p-4 border rounded w-80">
        <div>
          <p className="text-lg font-bold text-black">Fare Summary</p>
        </div>
       
            <div className=" flex justify-between items-center my-2 border-b border-gray-200 py-2">
              <div className=" pointer flex-2 flex items-center">
                <span className="mr-2  mt-1">
                  <span
                    className="iconPlusImg bg-no-repeat"
                    style={{
                      backgroundImage: 'url(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png)',
                      width: '16px',
                      height: '16px'
                    }}
                  ></span>
                </span>
                <span className=" font-semibold ">Base Fare</span>
              </div>
              <span className="text-base text-gray-700">£ 5000</span>
            </div>
          
          
            <div className=" flex justify-between items-center my-2 border-b border-gray-200 py-2">
              <div className=" hrtlCenter  flex-2 flex items-center">
                <span className="mr-2 mt-1">
                  <span
                    className="iconPlusImg bg-no-repeat"
                    style={{
                      backgroundImage: 'url(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png)',
                      width: '16px',
                      height: '16px'
                    }}
                  ></span>
                </span>
                <span className=" font-semibold">Taxes and Surcharges</span>
              </div>
              <span className="text-base text-gray-700">£ 887</span>
            </div>
         
            <div className=" flex justify-between items-center my-2 border-b border-gray-200 py-2">
              <div className="  pointer flex-2 flex items-center">
                <span className="mr-2 mt-1">
                  <span
                    className="iconPlusImg bg-no-repeat"
                    style={{
                      backgroundImage: 'url(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png)',
                      width: '16px',
                      height: '16px'
                    }}
                  ></span>
                </span>
                
                <span className=" font-semibold">Other Services</span>
              </div>
              <span className="text-base text-gray-700">£ 400</span>
            </div>
         
        <div className=" mt-4">
          <p className=" flex justify-between items-center">
            <span className="text-lg font-bold text-black">Total Amount</span>
            <span className="text-lg font-bold text-black">£ 7,582</span>
          </p>
        </div>
      </section> */}
    </>
  );
};

export default FlightSeat;
