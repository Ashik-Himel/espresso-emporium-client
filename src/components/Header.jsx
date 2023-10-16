import headerBg from "../assets/images/header-bg.jpg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-2" style={{backgroundImage: `url(${headerBg})`}}>
      <div className="container">
        <Link to='/' onClick={() => scrollTo(0, 0)} className="flex justify-center items-center gap-2 w-fit mx-auto">
          <img className="w-10" src="/favicon.png" alt="Brand Icon" />
          <span className="!font-rancho text-3xl !text-white">Espresso Emporium</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;