import { Link } from "react-router-dom";

const CourseList = (props) => {
  return (
    <div className="md:mx-32 py-20 grid md:grid-cols-3 gap-4 justify-center">
      {props.course.map((item) => (
        <Link to={`/course-details/${item["_id"]}`}>
          <div
            key={item["_id"]}
            className="relative flex hover:bg-white hover:transition duration-200 h-[28rem] max-w-[28rem] flex-col rounded-xl bg-slate-50 bg-clip-border text-gray-700 shadow-xl"
          >
            <div className="relative mx-4 pt-3  overflow-hidden rounded-xl  bg-clip-border text-white">
              <img
                src={item.thumbnail.map((url) => url.url)}
                alt=""
                className="h-64 w-full"
              />
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {item["title"]}
                </h5>
                <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="-mt-0.5 h-5 w-5 text-red-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0
                </p>
              </div>
            </div>
            <div className="p-6 pt-2">
              <button
                className="block w-full rounded-lg bg-green-400 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Details
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
