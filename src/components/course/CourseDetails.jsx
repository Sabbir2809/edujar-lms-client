import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { COURSE_DETAILS_API_REQUEST } from "../../apiRequest/API";
import AccordionComponent from "./Accordion";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseInfo, setCourseInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await COURSE_DETAILS_API_REQUEST(id);
      setCourseInfo(data);
    })();
  }, []);

  console.log(courseInfo);

  return (
    <div className="bg-white mt-10">
      {courseInfo.map((item) => (
        <div
          key={item._id}
          className="md:mx-auto max-w-screen-xl gap-16 px-12 md:flex grid grid-cols-1 py-10 bg-white">
          <section className="ml-[-10%] mr-[-10%] md:ml-0 md:mr-0 md:w-full">
            <div>
              <h1 className="text-8xl text-black font-semibold">{item.title}</h1>
              <p className="text-black text-[16px] py-5">{item.description}</p>
            </div>

            <div>
              <h1 className="text-3xl text-gray-900 font-bold mb-5">কোর্স ইন্সট্রাক্টর</h1>

              <div className="items-center rounded border border-gray-100 drop-shadow-md bg-white p-4 flex gap-4">
                <img className="w-[73px] h-[73px] rounded-full" src={item.instructor.image[0].url} alt="" />

                <div>
                  <h1 className="text-black font-semibold text-[20px]">{item.instructor.name}</h1>
                  <p className="text-black">{item.instructor.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-3xl text-gray-900 font-bold mb-5">কোর্সটি করে যা শিখবেন</h1>
              <div className="border border-gray-100 rounded shadow mb-10">
                <ul className="grid grid-cols-2 text-black px-7 py-6 gap-7 list-disc text-[15px]">
                  <li>নিনিয়ম মুখস্থ না করে প্র্যাকটিকাল উদাহরণের মাধ্যমে ইংরেজি গ্রামার শেখার সহজ উপায়।</li>
                </ul>
              </div>

              <div className="">
                <h1 className="text-3xl text-gray-900 font-bold">কোর্স সম্পর্কে বিস্তারিত</h1>

                <div className="border border-gray-100 rounded shadow-xl mb-10 mt-7 ">
                  <AccordionComponent />
                </div>
              </div>
            </div>
          </section>

          <section className="md:order-last order-first">
            <div className="rounded border border-gray-100 drop-shadow-md bg-white md:m-0 m-[-35px] mt-10 ">
              <div className="">
                <img
                  className="w-[650px]"
                  src="https://cdn.10minuteschool.com/lg/images/thumbnails/skills/english-grammar-crash-course-course-thumbnail-by-sakib-bin-rashid-16x9.jpg"
                  alt=""
                />

                <h1 className="text-3xl text-gray-900 font-bold mt-5 mb-5 mx-4">${item.price}</h1>

                <div className="mx-5 mb-5">
                  <button className="btn bg-green-300 border-none text-white text-bold text-lg w-full">
                    Enroll Now
                  </button>
                </div>

                <div className="mx-10 mb-8 mt-7 text-[15px] text-gray-800">
                  <ul className="list-disc">
                    <li className="my-2">কোর্সটি করছেন ১৭৫৮৯ জন</li>
                    <li className="my-2">সময়সীমা ৬ মাস</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
