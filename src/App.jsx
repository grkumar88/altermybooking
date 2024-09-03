import './App.css';
import { Button } from './components/ui/button';
import Footer from './components/Footer';
import Header from './components/Header';
import Flights from './page/Flightdetails/Flights';
import RightSide from '../src/assets/images/right-side.png';
function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;
