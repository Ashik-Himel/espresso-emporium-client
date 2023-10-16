import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BsArrowLeft } from "react-icons/bs";
import errorImg from '../assets/images/404.gif';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="py-10">
        <section>
          <div className="container">
            <div className="text-center">
              <Link to='/' onClick={() => scrollTo(0, 0)} className="btn bg-[transparent] border-none hover:bg-primary !rounded-md mb-6" style={{textShadow: '1px 1px 10px'}}><BsArrowLeft /> Back to Home</Link>
            </div>
            <img src={errorImg} alt="404 Image" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;