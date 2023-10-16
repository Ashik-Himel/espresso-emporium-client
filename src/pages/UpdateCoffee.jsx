import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { BsArrowLeft } from "react-icons/bs";

const UpdateCoffee = () => {
  const { _id, photo, name, chef, supplier, taste, category, details, price } =
    useLoaderData();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const price = e.target.price.value;
    const photo = e.target.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      price,
      photo,
    };

    const res = await fetch(
      `https://espresso-emporium-server-side.vercel.app/coffees/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    );
    const data = await res.json();
    if (data.modifiedCount === 1) {
      Swal.fire({
        title: "Successful !!!",
        text: "Existing coffee details updated successfully!",
        icon: "success",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <main className="mt-8 mb-16">
      <div className="container">
        <Link
          to="/"
          className="btn bg-[transparent] border-none hover:bg-primary !rounded-md mb-6"
          style={{ textShadow: "1px 1px 10px" }}
        >
          <BsArrowLeft /> Back to Home
        </Link>
        <div className="bg-bg-color p-10 rounded-lg">
          <h2
            className="text-3xl text-center mb-2"
            style={{ textShadow: "2px 2px 5px" }}
          >
            Update Existing Coffee Details
          </h2>
          <p className="max-w-[550px] mx-auto text-center mb-8 opacity-70">
            It is a long established fact that a reader will be destructed by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          <form onSubmit={handleUpdate}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <div className="w-full">
                <label
                  className="font-raleway font-bold mb-2 block"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="input w-full font-raleway focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter coffee name"
                  defaultValue={name}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  className="font-raleway font-bold mb-2 block"
                  htmlFor="chef"
                >
                  Chef
                </label>
                <input
                  className="input w-full font-raleway focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]"
                  type="text"
                  name="chef"
                  id="chef"
                  placeholder="Enter coffee chef"
                  defaultValue={chef}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <div className="w-full">
                <label
                  className="font-raleway font-bold mb-2 block"
                  htmlFor="supplier"
                >
                  Supplier
                </label>
                <input
                  className="input w-full font-raleway focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]"
                  type="text"
                  name="supplier"
                  id="supplier"
                  placeholder="Enter coffee supplier"
                  defaultValue={supplier}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  className="font-raleway font-bold mb-2 block"
                  htmlFor="taste"
                >
                  Taste
                </label>
                <input
                  className="input w-full font-raleway focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]"
                  type="text"
                  name="taste"
                  id="taste"
                  placeholder="Enter coffee taste"
                  defaultValue={taste}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <div className="w-full">
                <label
                  className="font-raleway font-bold mb-2 block"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  className="input w-full font-raleway focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]"
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Enter coffee category"
                  defaultValue={category}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  className="font-raleway font-bold mb-2 block"
                  htmlFor="details"
                >
                  Details
                </label>
                <input
                  className="input w-full font-raleway focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]"
                  type="text"
                  name="details"
                  id="details"
                  placeholder="Enter coffee details"
                  defaultValue={details}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
              <div className="w-full">
                <label
                  className="font-raleway font-bold mb-2 block"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="input w-full font-raleway focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]"
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Enter coffee price"
                  defaultValue={price}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  className="font-raleway font-bold mb-2 block"
                  htmlFor="photo"
                >
                  Photo
                </label>
                <input
                  className="input w-full font-raleway focus:border-primary focus:[box-shadow:0px_0px_4px_1px_#331A15]"
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Enter photo URL"
                  defaultValue={photo}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary border-secondary btn-block"
            >
              Update Coffee Details
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default UpdateCoffee;
