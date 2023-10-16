import { Link } from "react-router-dom";
import bannerBg from "../assets/images/banner-bg.png";

const Banner = () => {
  return (
    <section className="h-[450px] md:h-[550px] bg-[right] md:bg-center xl:bg-[-130px_calc(100%+110px)]" style={{backgroundImage: `url(${bannerBg})`, color: 'white'}}>
      <div className="container h-full">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="md:col-start-2">
            <h2 className="text-5xl mb-4">Would you like a Cup of Delicious Coffee?</h2>
            <p className="leading-7 mb-6 max-w-[600px] !text-white">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <Link className="btn btn-primary hover:bg-[transparent] hover:text-white hover:border-white">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;