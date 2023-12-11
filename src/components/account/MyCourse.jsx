import React from 'react';

const MyCourse = () => {
    return (
        <div>

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
                        English Grammar এর নিয়ম মুখস্থ না করে সহজেই শিখে নিন গ্রামার ব্যবহারের উপায়।
                    </p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary text-white font-bold text-[14px] "
                            style={{ fontFamily: "Saira" }}>
                            Continue{" "}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyCourse;