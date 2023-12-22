import { useState } from "react";
import { Link } from "react-router-dom";
import MyCourse from "./MyCourse";
import Notification from "./Notification";
import ProfileEdit from "./ProfileEdit";

const ProfileDetails = () => {
  const [activeTab, setActiveTab] = useState("false");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="py-24 bg-[#f8f8fa]">
      <div className="rounded flex justify-center gap-2">
        <Link
          to=""
          className={`shrink-0 border-b-2 ${
            activeTab === "false" ? "border-green-500 " : "border-none"
          } px-5 pb-2 text-lg font-semi-bold tracking-wide ${
            activeTab === "false" ? "text-gray-900" : "text-gray-500"
          }`}
          style={{ fontFamily: "Poppins" }}
<<<<<<< HEAD
          onClick={() => handleTabClick("Ebad")}
        >
=======
          onClick={() => handleTabClick("false")}>
>>>>>>> 647cbf9d778957b13b7934891ab2a986fc169f21
          My Courses
        </Link>

        <Link
          to=""
          className={`shrink-0 border-b-2 ${
            activeTab === "false 2" ? "border-green-500" : "border-none"
          } px-5 pb-2 text-lg font-semi-bold tracking-wide ${
            activeTab === "false 2" ? "text-gray-900" : "text-gray-500"
          }`}
          style={{ fontFamily: "Poppins" }}
<<<<<<< HEAD
          onClick={() => handleTabClick("Ebad 2")}
        >
=======
          onClick={() => handleTabClick("false 2")}>
>>>>>>> 647cbf9d778957b13b7934891ab2a986fc169f21
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
          onClick={() => handleTabClick("tab-3")}
        >
          Notification
        </Link>
      </div>

      <div
<<<<<<< HEAD
        className={`border border-green-400 rounded p-1 shadow-lg h-[100%] w-[76%]  mx-auto max-w-screen-2xl gap-10 px-12 py-10  ${
          activeTab === "Ebad" ? "block" : "hidden"
        }`}
      >
=======
        className={` rounded p-1 shadow-lg h-[100%] w-[76%]  mx-auto max-w-screen-2xl gap-10 px-12 py-10  ${
          activeTab === "false" ? "block" : "hidden"
        }`}>
>>>>>>> 647cbf9d778957b13b7934891ab2a986fc169f21
        <MyCourse />
      </div>

      <div
<<<<<<< HEAD
        className={`mx-auto gap-10 px-12 py-2 ${
          activeTab === "Ebad 2" ? "block" : "hidden"
        }`}
      >
=======
        className={`mx-auto max-w-screen-2xl gap-10 px-12 py-2 ${
          activeTab === "false 2" ? "block" : "hidden"
        }`}>
>>>>>>> 647cbf9d778957b13b7934891ab2a986fc169f21
        <ProfileEdit />
      </div>

      <div
        className={` rounded md:mx-32 mx-10  ${
          activeTab === "tab-3" ? "block" : "hidden"
        }`}
      >
        <Notification />
      </div>
    </div>
  );
};

export default ProfileDetails;
