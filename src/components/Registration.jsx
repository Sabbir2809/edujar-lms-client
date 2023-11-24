import Url from "../assets/RegistrationBG.jpg";
import { TextInput } from "keep-react";
import { IsEmpty, ErrorToast, SuccessToast } from "../utility/FormHelper";
import {
  Envelope,
  EyeSlash,
  Lock,
  IdentificationBadge,
  SimCard,
} from "phosphor-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationRequest } from "../apiRequest/API";
const Registration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const changeHandaler = (property, value) => {
    setData({ ...data, [property]: value });
  };

  const onSubnit = async () => {
    const { fullName, email, phoneNumber, password } = data;
    if (IsEmpty(fullName)) {
      ErrorToast("fullName is required");
      return false;
    } else if (IsEmpty(email)) {
      ErrorToast("email is required");
      return false;
    } else if (IsEmpty(phoneNumber)) {
      ErrorToast("phoneNumber url is required");
      return false;
    } else if (IsEmpty(password)) {
      ErrorToast("password is required");
      return false;
    } else {
      await RegistrationRequest(fullName, email, phoneNumber, password).then(
        (result) => {
          if (result.status === true) {
            SuccessToast(result.message);
            navigate("/login");
          }
        }
      );
    }
  };
  //   console.log(data);
  return (
    <div className="relative h-screen flex items-center justify-center px-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${Url}')` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Content */}
      <div className="bg-slate-700 opacity-100 w-100 rounded-[20px] p-10 z-10">
        <h1 className="text-info text-6xl text-center">Create New Account</h1>
        <input
          onChange={(e) => {
            changeHandaler("fullName", e.target.value);
          }}
          className="w-full border border-gray-300 rounded-md py-2 px-3 my-3 focus:outline-none focus:border-blue-700 "
          placeholder="Full Name"
          type="text"
          color="gray"
          addon={<IdentificationBadge size={20} color="#5E718D" />}
          addonPosition="left"
        />
        <br />
        <input
          placeholder="example@gmail.com"
          onChange={(e) => {
            changeHandaler("email", e.target.value);
          }}
          type="email"
          color="gray"
          className="w-full border border-gray-300 rounded-md py-2 mb-3 px-3 focus:outline-none focus:border-blue-700 "
          sizing="md"
          addon={<Envelope size={20} color="#5E718D" />}
          addonPosition="left"
        />
        <br />
        <input
          placeholder="Mobile No"
          onChange={(e) => {
            changeHandaler("phoneNumber", e.target.value);
          }}
          type="number"
          className="w-full border border-gray-300 rounded-md py-2 mb-3 px-3 focus:outline-none focus:border-blue-700 "
          color="gray"
          sizing="md"
          addon={<SimCard size={20} color="#5E718D" />}
          addonPosition="left"
        />
        <br />
        <input
          placeholder="password"
          onChange={(e) => {
            changeHandaler("password", e.target.value);
          }}
          className="w-full border border-gray-300 rounded-md py-2 mb-3 px-3 focus:outline-none focus:border-blue-700 "
          color="gray"
          sizing="md"
          type="password"
          addon={<Lock size={20} color="#5E718D" />}
          addonPosition="left"
          icon={<EyeSlash size={20} color="#5E718D" />}
          iconPosition="right"
        />
        <div className="pt-5">
          <button
            onClick={onSubnit}
            className="btn bg-green-300 text-white text-bold text-lg w-full"
          >
            Submit
          </button>
          <h3 className="py-3">
            Already Registered ?{" "}
            <Link className="btn btn-sm" to="/login">
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Registration;
