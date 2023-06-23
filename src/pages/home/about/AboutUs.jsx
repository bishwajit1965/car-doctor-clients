import Parts from "../../../assets/images/about_us/parts.jpg";
import Person from "../../../assets/images/about_us/person.jpg";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="relative lg:w-1/2">
          <img src={Person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={Parts}
            alt=""
            className="absolute rounded-lg max-w-sm top-1/2 left-40 w-3/4 border-8 border-white shadow-2xl"
          />
        </div>

        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-2xl font-bold text-red-500 mt-24">About Us</h1>
          <h1 className="text-5xl font-bold text-slate-900">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <button className="btn bg-red-600 border-none mt-10">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
