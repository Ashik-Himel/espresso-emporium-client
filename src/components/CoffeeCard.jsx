import PropTypes from "prop-types";
import { AiFillEye } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { photo, name, chef, price, _id } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(
          `https://espresso-emporium-server-side.vercel.app/coffees/${_id}`,
          {
            method: "DELETE",
          }
        );
        const data = await res.json();
        if (data.deletedCount === 1) {
          const newList = coffees.filter((item) => item._id !== _id);
          setCoffees(newList);
          Swal.fire("Deleted!", "Coffee deleted successfully!", "success");
        }
      }
    });
  };

  return (
    <div className="bg-bg-color px-8 py-4 rounded-md flex justify-between items-center gap-6">
      <div className="w-[40%]">
        <img src={photo} alt={`${name}'s Photo`} />
      </div>
      <div className="space-y-1">
        <span className="block">
          <span className="font-semibold">Name:</span>{" "}
          <span className="opacity-70">{name}</span>
        </span>
        <span className="block">
          <span className="font-semibold">Chef:</span>{" "}
          <span className="opacity-70">{chef}</span>
        </span>
        <span className="block">
          <span className="font-semibold">Price:</span>{" "}
          <span className="opacity-70">{price}</span>
        </span>
      </div>
      <div className="space-y-4">
        <Link
          to={`/coffees/${_id}`}
          className="bg-[#D2B48C] text-white w-12 h-12 flex justify-center items-center text-xl rounded-md"
        >
          <AiFillEye />
        </Link>
        <Link
          to={`/update/${_id}`}
          className="bg-[#3C393B] text-white w-12 h-12 flex justify-center items-center text-xl rounded-md"
        >
          <BiSolidPencil />
        </Link>
        <button
          className="bg-[#EA4744] text-white w-12 h-12 flex justify-center items-center text-xl rounded-md"
          onClick={() => handleDelete(_id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};
