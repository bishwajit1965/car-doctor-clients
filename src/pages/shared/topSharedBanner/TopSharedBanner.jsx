import { Link } from "react-router-dom";
import checkOutBannerImage from "../../../assets/images/checkout/checkout.png";

const TopSharedBanner = () => {
  const title = "Check Out";
  return (
    <div className="my-10 max-h-80 relative w-full">
      <img
        src={checkOutBannerImage}
        alt="top-banner-image"
        className="object-cover w-full max-h-80 rounded-lg"
      />
      <h1 className="text-3xl text-white font-bold absolute transform -translate-y-1/2 top-1/2 left-12">
        {title}
      </h1>
      <div className="absolute transform -translate-x-1/2 bottom-0 left-1/2">
        <Link to="/">
          <button className="text-white bg-red-500 px-5 py-1 rounded-t-md">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopSharedBanner;
