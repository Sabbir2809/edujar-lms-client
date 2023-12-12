import { IoMdCheckmark } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import { TbPasswordFingerprint } from "react-icons/tb";

const ProfileEdit = () => {
    return (
        <div className="w-full h-[100%] grid md:grid-cols-2 grid-cols-1 gap-6">
            <section className="border rounded p-4 shadow-lg h-[100%] w-full mt-10">
                <div>
                    <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center" style={{ fontFamily: "Saira" }}>
                        Profile Details
                    </h1>
                    <img
                        className="w-32 h-32 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-3 "
                        src="https://cdn.ostad.app/user/avatar/2023-02-19T19-47-34.458Z-FBIMG1676836030404150x150.jpg"
                        alt=""
                    />
                    <p
                        className="text-center text-blueGray-900 font-semibold text-[13px] mt-4"
                        style={{ fontFamily: "Saira" }}>
                        Image must be 150*150 px
                    </p>

                    <div className="">
                        <button
                            className="w-full p-3 rounded bg-blueGray-700 text-white mt-5 text-center flex justify-center items-center gap-2 hover:bg-blueGray-900 font-semibold"
                            style={{ fontFamily: "Saira" }}>
                            Upload Image Here <LuImagePlus />{" "}
                        </button>
                    </div>

                    <div className="mt-11 h-full w-full grid grid-cols-2 gap-8">
                        <div>
                            <label
                                htmlFor="fullName"
                                className="text-[13px] font-semibold text-gray-800 tracking-wide"
                                style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Full Name"
                                className="input input-bordered w-full max-w-2xl text-gray-400 text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                                style={{ fontFamily: "Poppins", fontWeight: "400" }}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="fullName"
                                className="text-[13px] font-semibold text-gray-800 tracking-wide"
                                style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Full Name"
                                className="input input-bordered w-full max-w-2xl   text-gray-400 text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                                style={{ fontFamily: "Poppins", fontWeight: "400" }}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="fullName"
                                className="text-[13px] font-semibold text-gray-800 tracking-wide"
                                style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Full Name"
                                className="input input-bordered w-full max-w-2xl   text-gray-400  text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                                style={{ fontFamily: "Poppins", fontWeight: "400" }}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="fullName"
                                className="text-[13px] font-semibold text-gray-800 tracking-wide"
                                style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Full Name"
                                className="input input-bordered w-full max-w-2xl   text-gray-400 text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                                style={{ fontFamily: "Poppins", fontWeight: "400" }}
                            />
                        </div>

                        <div className=" items-center justify-center flex col-span-2 ">
                            <button
                                className="p-3 rounded bg-blueGray-700 text-white mt-5 text-center flex justify-center items-center gap-2 hover:bg-blueGray-900 font-semibold"
                                style={{ fontFamily: "Saira" }}>
                                Save Changes <IoMdCheckmark />{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border rounded p-4 shadow-xl md:h-[70%] h-[95%] w-full md:mt-10 mt-10">
                <div>
                    <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center" style={{ fontFamily: "Saira" }}>
                        Change Password
                    </h1>
                    <TbPasswordFingerprint className="w-32 h-44 mx-auto text-gray-700" />
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <label
                            htmlFor="fullName"
                            className="text-[13px] font-semibold text-gray-800 tracking-wide"
                            style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Full Name"
                            className="input input-bordered w-full max-w-2xl   text-gray-400  text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                            style={{ fontFamily: "Poppins", fontWeight: "400" }}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="fullName"
                            className="text-[13px] font-semibold text-gray-800 tracking-wide"
                            style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Full Name"
                            className="input input-bordered w-full max-w-2xl   text-gray-400  text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                            style={{ fontFamily: "Poppins", fontWeight: "400" }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="fullName"
                            className="text-[13px] font-semibold text-gray-800 tracking-wide"
                            style={{ fontFamily: "Poppins", fontWeight: "600" }}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Full Name"
                            className="input input-bordered w-full max-w-2xl   text-gray-400  text-md bg-white mt-2 hover:ring ring-black ring-offset-base-100 ring-offset-3 tracking-wider"
                            style={{ fontFamily: "Poppins", fontWeight: "400" }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfileEdit;