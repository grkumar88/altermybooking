import {
  selectedseat,
  basicfare,
  tax,
  seatfare,
  meals,
  baggage,
} from '@/redux/flightSlice';
import { useSelector } from 'react-redux';

// export default function FareDetails({classname}) {
const FareDetails = ({ classname }) => {
  const selectedSeat = useSelector(selectedseat);
  const basicFare = useSelector(basicfare) || 0;
  const taxValue = useSelector(tax) || 0;
  const seatFare = useSelector(seatfare) || 0;
  const mealsValue = useSelector(meals) || 0;
  const baggageValue = useSelector(baggage) || 0;

  console.log('basicFare typeof', typeof basicFare);

  let totalFare = basicFare + taxValue + seatFare + mealsValue + baggageValue;

  return (
    <>
      <div className="flex ">
        <div className={classname}>
          {/* <div className="absolute bg-white right-100 top-10 ml-40  inline-block p-4 border rounded w-80"> */}
          {/* <div className=" bg-white right-100  inline-block p-4 border rounded w-80"> */}
          <section>
            <div>
              <p className="text-lg text-center font-bold text-black">
                Fare Summary
              </p>
            </div>
            <div className=" flex justify-between items-center my-2 border-b border-gray-200 py-2">
              <div className=" pointer flex-2 flex items-center">
                <span className="mr-2  mt-1">
                  <span
                    className="iconPlusImg bg-no-repeat"
                    style={{
                      backgroundImage:
                        'url(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png)',
                      width: '16px',
                      height: '16px',
                    }}
                  ></span>
                </span>
                <span className=" font-semibold ">Seat Number</span>
              </div>
              <span className="text-base text-gray-700">{selectedSeat}</span>
            </div>
            <div className=" flex justify-between items-center my-2 border-b border-gray-200 py-2">
              <div className=" pointer flex-2 flex items-center">
                <span className="mr-2  mt-1">
                  <span
                    className="iconPlusImg bg-no-repeat"
                    style={{
                      backgroundImage:
                        'url(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png)',
                      width: '16px',
                      height: '16px',
                    }}
                  ></span>
                </span>
                <span className=" font-semibold ">Base Fare</span>
              </div>
              <span className="text-base text-gray-700">£ {basicFare}</span>
            </div>

            {mealsValue !== 0 && (
              <div className=" flex justify-between items-center my-2 border-b border-gray-200 py-2">
                <div className=" pointer flex-2 flex items-center">
                  <span className="mr-2  mt-1">
                    <span
                      className="iconPlusImg bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png)',
                        width: '16px',
                        height: '16px',
                      }}
                    ></span>
                  </span>
                  <span className=" font-semibold ">Meal</span>
                </div>
                <span className="text-base text-gray-700">£ {mealsValue}</span>
              </div>
            )}

            <div className=" flex justify-between items-center my-2 border-b border-gray-200 py-2">
              <div className=" hrtlCenter  flex-2 flex items-center">
                <span className="mr-2 mt-1">
                  <span
                    className="iconPlusImg bg-no-repeat"
                    style={{
                      backgroundImage:
                        'url(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png)',
                      width: '16px',
                      height: '16px',
                    }}
                  ></span>
                </span>
                <span className=" font-semibold">Taxes and Surcharges</span>
              </div>
              <span className="text-base text-gray-700">£ {taxValue}</span>
            </div>

            <div className=" flex justify-between items-center my-2 border-b border-gray-200 py-2">
              <div className="  pointer flex-2 flex items-center">
                <span className="mr-2 mt-1">
                  <span
                    className="iconPlusImg bg-no-repeat"
                    style={{
                      backgroundImage:
                        'url(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png)',
                      width: '16px',
                      height: '16px',
                    }}
                  ></span>
                </span>

                <span className=" font-semibold">Seat Fare</span>
              </div>
              <span className="text-base text-gray-700">£ {seatFare}</span>
            </div>
            <div className=" flex justify-between items-center my-2 border-b border-gray-200 py-2">
              <div className="  pointer flex-2 flex items-center">
                <span className="mr-2 mt-1">
                  <span
                    className="iconPlusImg bg-no-repeat"
                    style={{
                      backgroundImage:
                        'url(//jsak.mmtcdn.com/flights/assets/media/ic_expand.68dc8068.png)',
                      width: '16px',
                      height: '16px',
                    }}
                  ></span>
                </span>

                <span className=" font-semibold">Baggage Fare</span>
              </div>
              <span className="text-base text-gray-700">£ {baggageValue}</span>
            </div>

            <div className=" mt-4">
              <p className=" flex justify-between items-center">
                <span className="text-lg font-bold text-black">
                  Total Amount
                </span>
                <span className="text-lg font-bold text-black">
                  £ {totalFare}
                </span>
              </p>
            </div>

            <div className=" mt-4">
              <p className=" flex justify-end">
                <button
                  type="submit"
                  className="text-md font-semibold text-white bg-green-600 px-3 py-0.5 rounded-xl"
                >
                  Confirm
                </button>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FareDetails;
