import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img src={img} alt="Shoes" className="rounded-xl h-52 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-red-500 font-bold">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/book/${_id}`}>
            <button type="submit" className="btn btn-primary">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
