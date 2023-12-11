const MyCourse = () => {
  return (
    <div className="card w-[100%] lg:w-96  shadow-xl mt-10 border-2 rounded-lg ">
      <figure>
        <img
          src="https://cdn.10minuteschool.com/lg/images/thumbnails/skills/english-grammar-crash-course-course-thumbnail-by-sakib-bin-rashid-16x9.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-black" style={{ fontFamily: "Saira" }}>
          English Grammar Crash Course
        </h2>

        <div className="card-actions">
          <button
            className="btn btn-success text-white w-full font-bold text-[14px] "
            style={{ fontFamily: "Saira" }}>
            Continue{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
