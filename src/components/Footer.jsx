import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import footerBg from "../assets/images/footer-bg.jpg";
import bottomFooterBg from "../assets/images/bottom-footer-bg.jpg";
import Swal from 'sweetalert2';

const handleSubmit = e => {
  e.preventDefault();
  e.target.reset();
  Swal.fire(
    'Successful !!!',
    'Message sent successfully!',
    'success'
  )
}

const Footer = () => {
  return (
    <footer style={{backgroundImage: `url(${footerBg})`}}>
      <div className="container">
        <div className='flex flex-col md:flex-row gap-6 md:gap-10 justify-between md:items-center pt-12 md:pt-20 pb-8'>
          <div>
            <img className='w-16 block mb-1' src="/favicon.png" alt="Brand Icon" />
            <h2 className='text-3xl mb-3' style={{textShadow: '2px 2px 5px'}}>Espresso Emporium</h2>
            <p className='mb-4 max-w-[600px]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            <div className='flex items-center gap-4 text-2xl mb-6'>
              <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
              <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <BsTwitter />
              </a>
              <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
              <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
            </div>
            <h2 className='text-3xl mb-2' style={{textShadow: '2px 2px 5px'}}>Get in Touch</h2>
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <FaPhoneAlt />
                <a className='text-text-color font-raleway' href="tel:+8801770473899">+88 01770 473899</a>
              </div>
              <div className='flex items-center gap-2 mb-2'>
                <FaEnvelope />
                <a className='text-text-color font-raleway' href="mailto:ashikujjamanhimel@gmail.com" target="_blank" rel="noopener noreferrer">ashikujjamanhimel@gmail.com</a>
              </div>
              <div className='flex items-center gap-2 mb-2'>
                <FaLocationDot />
                <span>Kewa, Sreepur, Gazipur-1740, Dhaka</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-3xl mb-6' style={{textShadow: '2px 2px 5px'}}>Contact with Us</h2>
            <form onSubmit={handleSubmit}>
              <input className='input w-full font-raleway mb-4 border-gray-300 max-w-[550px] focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]' type="text" name="name" id="name" placeholder='Name' required />
              <input className='input w-full font-raleway mb-4 border-gray-300 max-w-[550px] focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]' type="email" name="email" id="email" placeholder='Email' required />
              <textarea className='textarea resize-none w-full font-raleway mb-4 border-gray-300 max-w-[550px] focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]' name="message" id="message" placeholder='Message' required></textarea>
              <div>
                <input className='btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white !rounded-full' type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <section className='py-4' style={{backgroundImage: `url(${bottomFooterBg})`}}>
        <div className="container">
          <p className='!font-rancho text-xl !text-white text-center'>Copyright &copy; {new Date().getFullYear()} Espresso Emporium ! All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;