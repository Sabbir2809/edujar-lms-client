import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import ProfileEdit from "./ProfileEdit";
import MyCourse from "./MyCourse";

const ProfileDetails = () => {
    const [activeTab, setActiveTab] = useState("Ebad");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="py-20 bg-[#f8f8fa]">
            <div className=" py-3 rounded flex justify-center gap-5 ">
                <Link
                    to=""
                    className={`shrink-0 border-b-2 ${
                        activeTab === "Ebad" ? "border-green-500" : "border-none"
                    } px-5 pb-2 text-lg font-semi-bold tracking-wide ${
                        activeTab === "Ebad" ? "text-gray-900" : "text-gray-500"
                    }`}
                    style={{ fontFamily: "Poppins" }}
                    onClick={() => handleTabClick("Ebad")}>
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
                    onClick={() => handleTabClick("Ebad 2")}>
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
                    onClick={() => handleTabClick("tab-3")}>
                    Notification
                </Link>
            </div>

            <div
                className={`border rounded p-1 shadow-lg h-[100%] w-[76%] mt-10 mx-auto max-w-screen-2xl gap-10 px-12 py-10  ${
                    activeTab === "Ebad" ? "block" : "hidden"
                }`}>
                <MyCourse />
            </div>

            <div
                className={`mx-auto max-w-screen-2xl gap-10 px-12 py-2 mt-10  ${
                    activeTab === "Ebad 2" ? "block" : "hidden"
                }`}>
                <ProfileEdit />
            </div>

            <div className={` rounded md:mx-32 mx-10  ${activeTab === "tab-3" ? "block" : "hidden"}`}>
                <Notification />
            </div>
        </div>
    );
};

export default ProfileDetails;