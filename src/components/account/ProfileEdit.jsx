import { Upload } from "keep-react";
import { IoMdCheckmark } from "react-icons/io";
import { getUserDetails } from "../../utility/SessionHelper";
const ProfileEdit = () => {
  return (
    <section className="w-full grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-10 mt-5">
      <div className="bg-white p-7 rounded-lg shadow-lg w-full">
        <div>
          <img
            className="w-32 h-32 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-3 "
            src="https://cdn.ostad.app/user/avatar/2023-02-19T19-47-34.458Z-FBIMG1676836030404150x150.jpg"
            alt=""
          />
          <div className="pt-5">
            <Upload horizontal={true} />
          </div>

          <div className="mt-11 h-full w-full">
            <div>
              <label className="text-[13px] font-semibold text-gray-800 tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-2xl text-gray-400 text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
              />
            </div>

            <div>
              <label className="text-[13px] font-semibold text-gray-800 tracking-wide">
                Email
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-2xl   text-gray-400 text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
              />
            </div>

            <div className="flex justify-end pt-10 ">
              <button className="btn bg-green-400 hover:bg-green-600 text-white border-none">
                Update <IoMdCheckmark />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-7 rounded-lg shadow-lg w-full md:h-[55%]">
        <div>
          <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">
            Change Password
          </h1>
        </div>

        <div>
          <label className="text-[13px] font-semibold text-gray-800 tracking-wide">
            New Password
          </label>
          <input
            type="text"
            placeholder="New Password"
            className="input input-bordered w-full max-w-2xl   text-gray-400  text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
          />
        </div>
        <div>
          <label className="text-[13px] font-semibold text-gray-800 tracking-wide">
            Confirm Password
          </label>
          <input
            type="text"
            placeholder="Confirm Password"
            className="input input-bordered w-full max-w-2xl   text-gray-400  text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
          />
        </div>
        <div className="py-7">
          <button className="btn block w-full bg-green-400 hover:bg-green-600 text-white border-none">
            Change Password
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileEdit;
