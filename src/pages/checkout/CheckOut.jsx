import TopSharedBanner from "../shared/topSharedBanner/TopSharedBanner";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import CheckingRow from "./CheckingRow";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  // const service = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://car-doctor-server-delta-seven.vercel.app/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure to delete?");
    if (proceed) {
      fetch(`https://car-doctor-server-delta-seven.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Data deleted successfully!");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    const proceed = confirm("Are you sure to update?");
    if (proceed) {
      fetch(`https://car-doctor-server-delta-seven.vercel.app/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            alert("Data updated successfully!");
            const remaining = bookings.filter((booking) => booking._id !== id);
            const updated = bookings.filter((booking) => booking._id === id);
            updated.status = "confirm";
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
          }
        });
    }
  };

  return (
    <div>
      <TopSharedBanner />
      <div className="my-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Bookings: {bookings.length}
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Service</th>
                <th>Name</th>
                <th>Service</th>
                <th>Price</th>
                <th>Email</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <CheckingRow
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleConfirm={handleConfirm}
                />
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th></th>
                <th>Service</th>
                <th>Name</th>
                <th>Service</th>
                <th>Price</th>
                <th>Email</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
