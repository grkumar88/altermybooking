import headerLogo from '../assets/images/header-logo.png';

const header = () => {
  return (
    <div className="flex justify-between bg-[#000099] p-3">
      <div className="self-center">
        <img src={headerLogo} alt="Header-Logo" />
      </div>
      <div className="self-center text-white">
        <p>Toll free : 98705345687</p>
      </div>
    </div>
  );
};

export default header;
