import './App.css';
import { Button } from './components/ui/button';
import Footer from './components/Footer';
import Header from './components/Header';
import Flights from './page/Flightdetails/Flights';
import RightSide from '../src/assets/images/right-side.png';
import FareDetails from './page/Flightdetails/FareDetails';
import Confirmation from './page/Flightdetails/Confirmation';
import { confirmationStore } from './redux/flightSlice';
import { useSelector } from 'react-redux';

function App() {
  const confirmation = useSelector(confirmationStore);
  return (
    <>
      <div className="flex flex-col min-h-screen  ">
        <Header />
        {confirmation ? (
          <Confirmation />
        ) : (
          <div className="m-auto md:w-[770px] lg:w-[1200px] flex-grow">
            <div className="p-3">
              <div className="flex justify-between">
                <div className="self-center">
                  <h1 className="text-lg text-[#061D70]">Seat Selection</h1>
                  <p className="text-sm text-[#9f9f9f]">
                    Why not treat yourself to your ideal seat?
                  </p>
                  <a href="/" className="text-md text-[#2356CF]">
                    Terms & Conditions
                  </a>
                </div>
                <div>
                  <img
                    src={RightSide}
                    alt="Flight-Booking"
                    height={120}
                    width={170}
                  />
                </div>
              </div>
            </div>

            <Flights />
            <div className="block md:hidden">
              <FareDetails
                classname={
                  'bg-white mb-6 flex justify-center right-100  m-auto p-4 border rounded w-80'
                }
              />
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;
