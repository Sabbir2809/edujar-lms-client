import { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Notification from "./Notification";
import Calender from "./Calender";
=======
import MyCourse from "./MyCourse";
import Notification from "./Notification";
import ProfileEdit from "./ProfileEdit";
>>>>>>> 496d4a004a448e961d9352bcda99dd3d5004568e

const ProfileDetails = () => {
  const [activeTab, setActiveTab] = useState("Ebad");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
<<<<<<< HEAD
    <div className="py-20 bg-[#f8f8fa]">
      <div className=" py-3 rounded flex justify-center gap-5 ">
=======
    <div className="py-24 bg-[#f8f8fa]">
      <div className="rounded flex justify-center gap-2 ">
>>>>>>> 496d4a004a448e961d9352bcda99dd3d5004568e
        <Link
          to=""
          className={`shrink-0 border-b-2 ${
            activeTab === "Ebad" ? "border-green-500" : "border-none"
          } px-5 pb-2 text-lg font-semi-bold tracking-wide ${
            activeTab === "Ebad" ? "text-gray-900" : "text-gray-500"
          }`}
          style={{ fontFamily: "Poppins" }}
<<<<<<< HEAD
          onClick={() => handleTabClick("Ebad")}
        >
=======
          onClick={() => handleTabClick("Ebad")}>
>>>>>>> 496d4a004a448e961d9352bcda99dd3d5004568e
          My Courses
        </Link>

        <Link
          to=""
          className={`shrink-0 border-b-2 ${
            activeTab === "Ebad 2" ? "border-gray-500" : "border-none"
          } px-5 pb-2 text-lg font-semi-bold tracking-wide ${
            activeTab === "Ebad 2" ? "text-gray-900" : "text-gray-500"
          }`}
          style={{ fontFamily: "Poppins" }}
<<<<<<< HEAD
          onClick={() => handleTabClick("Ebad 2")}
        >
=======
          onClick={() => handleTabClick("Ebad 2")}>
>>>>>>> 496d4a004a448e961d9352bcda99dd3d5004568e
          My Profile
        </Link>
        <Link
          to=""
          className={`shrink-0 border-b-2 ${
            activeTab === "tab-3" ? "border-green-500" : "border-none"
          } px-5 pb-2 text-lg font-semi-bold tracking-wide ${
            activeTab === "tab-3" ? "text-gray-900" : "text-gray-500"
          }`}
          style={{ fontFamily: "Poppins" }}
<<<<<<< HEAD
          onClick={() => handleTabClick("tab-3")}
        >
=======
          onClick={() => handleTabClick("tab-3")}>
>>>>>>> 496d4a004a448e961d9352bcda99dd3d5004568e
          Notification
        </Link>
      </div>

      <div
        className={`border border-green-400 rounded p-1 shadow-lg h-[100%] w-[76%]  mx-auto max-w-screen-2xl gap-10 px-12 py-10  ${
          activeTab === "Ebad" ? "block" : "hidden"
<<<<<<< HEAD
        }`}
      >
        <div className="text-3xl font-bold tracking-widest text-blueGray-600">
          <h1>My Courses</h1>
        </div>
        <div className=" card w-[100%] lg:w-96 bg-base-200 shadow-xl mt-10 ring ring-gray-400 rounded-lg ">
          <figure>
            <img
              src="https://cdn.10minuteschool.com/lg/images/thumbnails/skills/english-grammar-crash-course-course-thumbnail-by-sakib-bin-rashid-16x9.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl" style={{ fontFamily: "Saira" }}>
              English Grammar Crash Course
            </h2>
            <p className="text-[14px]">
              English Grammar এর নিয়ম মুখস্থ না করে সহজেই শিখে নিন গ্রামার
              ব্যবহারের উপায়।
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary text-white font-bold text-[14px] "
                style={{ fontFamily: "Saira" }}
              >
                Continue{" "}
              </button>
            </div>
          </div>
        </div>
=======
        }`}>
        <MyCourse />
>>>>>>> 496d4a004a448e961d9352bcda99dd3d5004568e
      </div>

      <div
        className={`mx-auto max-w-screen-2xl gap-10 px-12 py-2 ${
          activeTab === "Ebad 2" ? "block" : "hidden"
<<<<<<< HEAD
        }`}
      >
        <section className=" rounded p-4 shadow-lg h-[100%] w-full mt-10 bg-white">
          <div>
            <h1
              className="text-2xl font-bold text-gray-700 mb-4 text-center"
              style={{ fontFamily: "Saira" }}
            >
              Profile Details
            </h1>
            <img
              className="w-32 h-32 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-3 "
              src="https://cdn.ostad.app/user/avatar/2023-02-19T19-47-34.458Z-FBIMG1676836030404150x150.jpg"
              alt=""
            />

            <p
              className="text-center text-blueGray-900 font-semibold text-[13px] mt-4"
              style={{ fontFamily: "Saira" }}
            >
              Image must be 150*150 px
            </p>

            <div className="">
              <button
                className="w-full p-3 rounded bg-blueGray-700 text-white mt-5 text-center flex justify-center items-center gap-2 hover:bg-blueGray-900 font-semibold"
                style={{ fontFamily: "Saira" }}
              >
                Upload Image Here <LuImagePlus />{" "}
              </button>
            </div>

            <div className="mt-11 h-full">
              <label
                htmlFor="fullName"
                className="text-[15px] font-semibold text-gray-800 tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: "600" }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-2xl   text-gray-400 mb-10 text-lg bg-white hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                style={{ fontFamily: "Poppins", fontWeight: "400" }}
              />

              <label
                htmlFor="fullName"
                className="text-[15px] font-semibold text-gray-800 tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: "600" }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-2xl   text-gray-400 mb-10 text-lg bg-white hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                style={{ fontFamily: "Poppins", fontWeight: "400" }}
              />

              <label
                htmlFor="fullName"
                className="text-[15px] font-semibold text-gray-800 tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: "600" }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-2xl   text-gray-400 mb-10 text-lg bg-white hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                style={{ fontFamily: "Poppins", fontWeight: "400" }}
              />

              <label
                htmlFor="fullName"
                className="text-[15px] font-semibold text-gray-800 tracking-wide"
                style={{ fontFamily: "Poppins", fontWeight: "600" }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-2xl   text-gray-400 mb-10 text-lg bg-white hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                style={{ fontFamily: "Poppins", fontWeight: "400" }}
              />

              <div className="flex justify-end">
                <button
                  className="p-3 rounded bg-blueGray-700 text-white mt-5 text-center flex justify-center items-center gap-2 hover:bg-blueGray-900 font-semibold"
                  style={{ fontFamily: "Saira" }}
                >
                  Save Changes <IoMdCheckmark />{" "}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded p-4 shadow-xl md:h-[70%] h-[95%] w-full mt-10">
          <div>
            <h1
              className="text-2xl font-bold text-gray-700 mb-4 text-center"
              style={{ fontFamily: "Saira" }}
            >
              Change Password
            </h1>

            <TbPasswordFingerprint className="w-36 h-44 mx-auto mt-10 text-gray-700" />
          </div>

          <div>
            <label
              htmlFor="fullName"
              className="text-[15px] font-semibold text-gray-800 tracking-wide"
              style={{ fontFamily: "Poppins", fontWeight: "600" }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-2xl   text-gray-400 mb-10 text-lg bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
              style={{ fontFamily: "Poppins", fontWeight: "400" }}
            />

            <label
              htmlFor="fullName"
              className="text-[15px] font-semibold text-gray-800 tracking-wide"
              style={{ fontFamily: "Poppins", fontWeight: "600" }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-2xl   text-gray-400 mb-10 text-lg bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
              style={{ fontFamily: "Poppins", fontWeight: "400" }}
            />

            <label
              htmlFor="fullName"
              className="text-[15px] font-semibold text-gray-800 tracking-wide"
              style={{ fontFamily: "Poppins", fontWeight: "600" }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-2xl   text-gray-400 mb-10 text-lg bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
              style={{ fontFamily: "Poppins", fontWeight: "400" }}
            />
          </div>
        </section>
=======
        }`}>
        <ProfileEdit />
      </div>

      <div className={` rounded md:mx-32 mx-10  ${activeTab === "tab-3" ? "block" : "hidden"}`}>
        <Notification />
>>>>>>> 496d4a004a448e961d9352bcda99dd3d5004568e
      </div>

      <div
        className={` rounded md:mx-32 mx-10${
          activeTab === "tab-3" ? "block" : "hidden"
        }`}
      >
        <Notification />
        <Calender />
      </div>
    </div>
  );
};

export default ProfileDetails;
