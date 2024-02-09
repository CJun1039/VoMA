import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";


export default function RegistrationContainer() {


  const { setUserData } = useContext(UserContext) || {};
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target); // Ensure e.target is referencing the form element
      const data = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        password: formData.get("password"),
      };
  
      const response = await fetch("http://localhost:3001/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        /*
        setUserData({
          token: responseData.token,
          volunteer: responseData.volunteer,
          isAdmin: responseData.user.sensitiveInformation.isAdmin,
        });
        localStorage.setItem("auth-token", responseData.token);
        */
        navigate("/dashboard");
      } else {
        setError("Registration failed. Please try again."); 
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Internal server error. Please try again."); 
    }
  };
  


  return (
    <div className="flex h-screen absolute top-0 items-center left-0 right-0">
      <div className="grow"></div>
      <div className="flex rounded-3xl shadow-xl h-5/6 bg-white flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="flex gap-x-6">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm password
              </label>
              <div>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-red/80 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 mb-5 text-center text-sm text-gray-500">
            Already part of the community?{" "}
            <Link
              className="font-semibold leading-6 text-orange-red/80 hover:text-orange-red/90"
              to="/login"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
}
