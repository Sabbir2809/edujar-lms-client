import { IoMdCheckmark } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { TbPasswordFingerprint } from "react-icons/tb";

const ProfileDetails = () => {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-gray-100">
      <div className="mx-auto max-w-screen-2xl gap-10 px-12 py-10 grid md:grid-cols-2 grid-cols-1  ">
        <section className="border rounded p-4 shadow-lg h-[100%] w-full mt-10">
          <div>
            <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">Profile Details</h1>
            <img
              className="w-32 h-32 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-3 "
              src="https://cdn.ostad.app/user/avatar/2023-02-19T19-47-34.458Z-FBIMG1676836030404150x150.jpg"
              alt=""
            />

            <p className="text-center text-blueGray-900 font-semibold text-[13px] mt-4">
              Image must be 150*150 px
            </p>

            <div className="">
              <button className="w-full p-3 rounded bg-blueGray-700 text-white mt-5 text-center flex justify-center items-center gap-2 hover:bg-blueGray-900 font-semibold">
                Upload Image Here <LuImagePlus />{" "}
              </button>
            </div>

            <div className="mt-11 h-full">
              <label htmlFor="fullName" className="text-[17px] font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Type here"
                className="input input-bordered w-full max-w-2xl font-bold text-gray-400 mb-10 text-xl bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 "
              />

              <label htmlFor="fullName" className="text-[17px] font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Type here"
                className="input input-bordered w-full max-w-2xl font-bold text-gray-400 mb-10 text-xl bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 "
              />

              <label htmlFor="fullName" className="text-[17px] font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Type here"
                className="input input-bordered w-full max-w-2xl font-bold text-gray-400 mb-10 text-xl bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 "
              />

              <label htmlFor="fullName" className="text-[17px] font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Type here"
                className="input input-bordered w-full max-w-2xl font-bold text-gray-400 mb-10 text-xl bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 "
              />

              <div className="flex justify-end">
                <button className="p-3 rounded bg-blueGray-700 text-white mt-5 text-center flex justify-center items-center gap-2 hover:bg-blueGray-900 font-semibold">
                  Save Changes <IoMdCheckmark />{" "}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="border rounded p-4 shadow-xl md:h-[70%] h-[95%] w-full mt-10">
          <div>
            <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">Change Password</h1>

            <TbPasswordFingerprint className="w-36 h-44 mx-auto mt-10 text-gray-700" />
          </div>

          <div>
            <label htmlFor="fullName" className="text-[17px] font-semibold text-gray-800">
              Old Password
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl font-bold text-gray-400 mb-10 text-xl bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 "
            />

            <label htmlFor="fullName" className="text-[17px] font-semibold text-gray-800">
              New Password
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl font-bold text-gray-400 mb-10 text-xl bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 "
            />

            <label htmlFor="fullName" className="text-[17px] font-semibold text-gray-800">
              Confirm Password
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl font-bold text-gray-400 mb-10 text-xl bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 "
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileDetails;
