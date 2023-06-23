import { Link } from "react-router-dom";
import LogIn from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { hideErrorElements, hideSuccessElements } from "../../helpers/Helpers";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    //Get the input field values
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Verify password and confirm password
    if (email.trim() === "") {
      setError("Email field is empty! ");
      hideErrorElements();
      return false;
    } else if (password.trim() === "") {
      setError("Password field is empty! ");
      hideErrorElements();
      return false;
    } else if (confirmPassword.trim() === "") {
      setError("Confirm password field is empty! ");
      hideErrorElements();
      return false;
    } else if (password.trim() !== confirmPassword.trim()) {
      setError("Passwords do not match");
      hideErrorElements();
      return false;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User creation is successful!!!");
        hideSuccessElements();
      })
      .then((error) => {
        console.log(error.message);
        hideErrorElements();
      });
    setError("");
    setSuccess("");
    form.reset();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2 px-10">
          <img src={LogIn} alt="" className="object-cover w-full" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold ">Sign up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already a member ?
                    <span className="text-indigo-500"> Log in</span>
                  </Link>
                </label>
              </div>
              <div className="">
                {error && (
                  <p>
                    <i className="text-red-500" id="error-message">
                      {error}
                    </i>
                  </p>
                )}
                {success && (
                  <p>
                    <i className="text-green-500" id="success-message">
                      {success}
                    </i>
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
