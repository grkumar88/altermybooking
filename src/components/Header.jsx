import headerLogo from '../assets/images/header-logo.png';

const header = () => {
  return (
    <div className="flex justify-between bg-[#000099] p-3">
      <div className="self-center w-1/2 md:w-auto">
        <img src={headerLogo} alt="Header-Logo" className="w-full" />
      </div>
      <div className="self-center text-white w-1/2 text-xs md:text-base text-right">
        <p>Toll free : 98705345687</p>
      </div>
    </div>
  );
};

export default header;
