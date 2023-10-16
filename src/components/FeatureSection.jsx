import featuresIcon1 from "../assets/images/features-icons/1.png";
import featuresIcon2 from "../assets/images/features-icons/2.png";
import featuresIcon3 from "../assets/images/features-icons/3.png";
import featuresIcon4 from "../assets/images/features-icons/4.png";

const FeatureSection = () => {
  return (
    <section className="bg-bg-color py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
          <div>
            <img className="h-16 block mb-3" src={featuresIcon1} alt="Feature Icon" />
            <h3 className="text-2xl mb-1">Awesome Aroma</h3>
            <p>You will definitely be a fan of the design & aroma of your coffee</p>
          </div>
          <div>
            <img className="h-16 block mb-3" src={featuresIcon2} alt="Feature Icon" />
            <h3 className="text-2xl mb-1">High Quality</h3>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          <div>
            <img className="h-16 block mb-3" src={featuresIcon3} alt="Feature Icon" />
            <h3 className="text-2xl mb-1">Pure Grades</h3>
            <p>The coffee is made of the green coffee beans which you will love</p>
          </div>
          <div>
            <img className="h-16 block mb-3" src={featuresIcon4} alt="Feature Icon" />
            <h3 className="text-2xl mb-1">Proper Roasting</h3>
            <p>Your coffee is brewed by first roasting the green coffee beans</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;