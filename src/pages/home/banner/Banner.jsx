import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-1/2">
      <div id="slide1" className="carousel-item relative w-full h-1/2">
        <img src={banner1} className="w-full object-cover rounded-lg" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5 z-50">
          <a
            href="#slide4"
            className="btn btn-circle bg-indigo-500 border-none"
          >
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-red-500 border-none">
            ❯
          </a>
        </div>
        <div className="absolute flex w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
          <div className="absolute max-w-2xl top-1/2 pl-12 text-white transform -translate-y-1/2 ">
            <h2 className="text-4xl font-extrabold text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="mb-4 mt-4">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 btn rounded-md">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning ml-3">
              Latest projects
            </button>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-3/4">
        <img src={banner2} className="w-full h-3/4 object-cover rounded-lg" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5 z-50">
          <a
            href="#slide1"
            className="btn btn-circle bg-indigo-500 border-none"
          >
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-red-500 border-none">
            ❯
          </a>
        </div>
        <div className="absolute flex w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
          <div className="absolute max-w-2xl top-1/2 pl-12 text-white transform -translate-y-1/2 ">
            <h2 className="text-4xl font-extrabold text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="mb-4 mt-4">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 btn rounded-md">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning ml-3">
              Latest projects
            </button>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-3/4">
        <img src={banner3} className="w-full h-3/4 object-cover rounded-lg" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5 z-50">
          <a
            href="#slide2"
            className="btn btn-circle bg-indigo-500 border-none"
          >
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-red-500 border-none">
            ❯
          </a>
        </div>
        <div className="absolute flex w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
          <div className="absolute max-w-2xl top-1/2 pl-12 text-white transform -translate-y-1/2 ">
            <h2 className="text-4xl font-extrabold text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="mb-4 mt-4">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 btn rounded-md">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning ml-3">
              Latest projects
            </button>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-3/4">
        <img src={banner4} className="w-full h-3/4 object-cover rounded-lg" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5 z-50">
          <a
            href="#slide3"
            className="btn btn-circle bg-indigo-500 border-none"
          >
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-red-500 border-none">
            ❯
          </a>
        </div>
        <div className="absolute flex w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg">
          <div className="absolute max-w-2xl top-1/2 pl-12 text-white transform -translate-y-1/2 ">
            <h2 className="text-4xl font-extrabold text-white">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="mb-4 mt-4">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 btn rounded-md">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning ml-3">
              Latest projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
