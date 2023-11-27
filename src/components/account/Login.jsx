import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";
import login from "./../../assets/login.svg";

const Login = () => {
  return (
    <div className="min-w-screen h-[100vh] bg-white flex items-center justify-center px-5 py-5">
      <div
        className="bg-slate-200 text-black rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}>
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
            <img src={login} />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <MdEmail />
                    </div>
                    <input
                      type="email"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-indigo-500"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <MdOutlinePassword />
                    </div>
                    <input
                      type="password"
                      className="w-full bg-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Enter Your Password"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    LOGIN
                  </button>
                </div>
              </div>
              <div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    to="/forget-password"
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    to="/registration"
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#">
                    Already have an account? Login!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
