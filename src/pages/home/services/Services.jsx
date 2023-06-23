import { useEffect, useState } from "react";
import ServiceCard from "../serviceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-delta-seven.vercel.app/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="py-20">
      <div className="text-center space-y-5">
        <h2 className="text-2xl font-bold text-red-600">Services</h2>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid md:grid-cols-3 justify-between items-center gap-4 mt-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
