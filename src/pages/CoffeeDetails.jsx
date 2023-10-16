import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const {photo, name, chef, supplier, taste, category, details, price} = useLoaderData();

  return (
    <main className="mt-8 mb-16">
      <div className="container">
        <Link to='/' className="btn bg-[transparent] border-none hover:bg-primary !rounded-md mb-6" style={{textShadow: '1px 1px 10px'}}><BsArrowLeft /> Back to Home</Link>
        <div className="bg-bg-color p-10 rounded-lg flex flex-col md:flex-row md:gap-8 justify-around items-center">
          <div>
            <img src={photo} alt={`${name}' Photo`} className="max-h-[400px]" />
          </div>
          <div>
            <h2 className="text-3xl mb-4" style={{textShadow: '2px 2px 5px'}}>{name}</h2>
            <div className='space-y-1'>
              <span className='block'><span className='font-semibold'>Name:</span> <span className='opacity-70'>{name}</span></span>
              <span className='block'><span className='font-semibold'>Chef:</span> <span className='opacity-70'>{chef}</span></span>
              <span className='block'><span className='font-semibold'>Supplier:</span> <span className='opacity-70'>{supplier}</span></span>
              <span className='block'><span className='font-semibold'>Taste:</span> <span className='opacity-70'>{taste}</span></span>
              <span className='block'><span className='font-semibold'>Category:</span> <span className='opacity-70'>{category}</span></span>
              <span className='block'><span className='font-semibold'>Details:</span> <span className='opacity-70'>{details}</span></span>
              <span className='block'><span className='font-semibold'>Price:</span> <span className='opacity-70'>{price}</span></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoffeeDetails;