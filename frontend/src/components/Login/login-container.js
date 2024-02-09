import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";


export default function LoginContainer() {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const loginUser = { email, password };
      const loginRes = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      });
  
      if (loginRes.ok) {
        const responseData = await loginRes.json();
        setUserData({
          user : responseData
        });
        localStorage.setItem("user", responseData);
        navigate("/dashboard");
      } else {
        const errorMessage = await loginRes.text();
        setError(errorMessage || "Login failed. Please try again."); 
      }
    } catch (err) {
      setLoading(false);
      console.error("Error logging in:", err);
      setError("Internal server error. Please try again.");
    }
  }
  

  return (
    <div className="flex h-screen absolute top-0 items-center left-0 right-0">
      <div className="grow"></div>
      <div className="flex rounded-3xl shadow-xl bg-white flex-1 flex-col justify-center h-3/4 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-orange-red/80 hover:text-orange-red/90"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 mt-2">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-red/80 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            New to Big At Heart?{" "}
            <Link
              className="font-semibold leading-6 text-orange-red/80 hover:text-orange-red/90"
              to="/register"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
}
