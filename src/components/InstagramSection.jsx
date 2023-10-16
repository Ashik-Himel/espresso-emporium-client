import instaImg1 from "../assets/images/insta-images/1.png"
import instaImg2 from "../assets/images/insta-images/2.png"
import instaImg3 from "../assets/images/insta-images/3.png"
import instaImg4 from "../assets/images/insta-images/4.png"
import instaImg5 from "../assets/images/insta-images/5.png"
import instaImg6 from "../assets/images/insta-images/6.png"
import instaImg7 from "../assets/images/insta-images/7.png"
import instaImg8 from "../assets/images/insta-images/8.png"

const InstagramSection = () => {
  return (
    <section className="mt-8 md:mt-16 mb-20">
      <div className="container">
        <div className="text-center mb-8">
          <span className="block mb-1">Follow Us Now</span>
          <h2 className="text-3xl mb-4" style={{textShadow: '2px 2px 5px'}}>Follow on Instagram</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <img src={instaImg1} alt="Instagram Image" />
          <img src={instaImg2} alt="Instagram Image" />
          <img src={instaImg3} alt="Instagram Image" />
          <img src={instaImg4} alt="Instagram Image" />
          <img src={instaImg5} alt="Instagram Image" />
          <img src={instaImg6} alt="Instagram Image" />
          <img src={instaImg7} alt="Instagram Image" />
          <img src={instaImg8} alt="Instagram Image" />
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;