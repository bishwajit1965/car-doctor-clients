import { useLoaderData } from "react-router-dom";
import TopSharedBanner from "../shared/topSharedBanner/TopSharedBanner";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, _id, price, img } = service;

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);
    fetch("https://car-doctor-server-delta-seven.vercel.app/bookings/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <TopSharedBanner />
      <div className="bg-zinc-100 my-10 p-12 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-10">
          Book Service: {title}
        </h2>
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-4 mb-6">
            <div className="form-control w-full">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name..."
                className="input w-full  "
              />
            </div>
            <div className="form-control w-full  ">
              <input
                type="date"
                name="date"
                placeholder="Service price..."
                className="input w-full "
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-4 mb-6">
            <div className="form-control w-full">
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Email..."
                className="input w-full"
              />
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                name="price"
                defaultValue={"$" + price}
                className="input w-full"
              />
            </div>
          </div>
          <div className="form-control mb-6">
            <textarea
              type="text"
              name="message"
              className="textarea textarea-bordered h-24"
              placeholder="Product description..."
            ></textarea>
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="btn btn-active btn-block bg-[#ed0606] border-none"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookService;
