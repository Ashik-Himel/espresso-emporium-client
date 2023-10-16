import { Link } from "react-router-dom";
import { FiCoffee } from "react-icons/fi";
import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import popularBg1 from "../assets/images/popular-bg-1.png";
import popularBg2 from "../assets/images/popular-bg-2.png";

const PopularProducts = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("https://espresso-emporium-server-side.vercel.app/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  return (
    <section
      className="mt-8 md:mt-16"
      style={{
        background: `url(${popularBg1}), url(${popularBg2})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "left top, right bottom",
      }}
    >
      <div className="container">
        <div className="text-center mb-8">
          <span className="block mb-1">--- Sip & Savor ---</span>
          <h2 className="text-3xl mb-4" style={{ textShadow: "2px 2px 5px" }}>
            Our Popular Products
          </h2>
          <Link
            to="/add" onClick={() => scrollTo(0, 0)}
            className="btn btn-primary border-secondary !rounded-md hover:bg-[transparent] hover:border-secondary"
          >
            Add Coffee <FiCoffee />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
