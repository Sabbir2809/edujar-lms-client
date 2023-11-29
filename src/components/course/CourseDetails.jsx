import AccordionComponent from "./Accordion";

const CourseDetails = () => {
  return (
    <div className="bg-white mt-10">
      <div className="md:mx-auto max-w-screen-xl gap-16 px-12 md:flex grid grid-cols-1 py-10 bg-white">
        <section className="ml-[-10%] mr-[-10%] md:ml-0 md:mr-0 md:w-full">
          <div>
            <h1 className="text-8xl text-black font-semibold">English Grammar Crash Course</h1>
            <p className="text-black text-[16px] py-5">
              English Grammar এর নিয়ম মুখস্থ না করে সহজেই শিখে নিন গ্রামার ব্যবহারের উপায়। ১০০টি ভিডিও ক্লাসের
              মাধ্যমে শিখুন Sentence Structure, Tense সহ গুরুত্বপূর্ণ সব গ্রামার টপিক। এনরোল করুন আজই!
            </p>
          </div>

          <div>
            <h1 className="text-3xl text-gray-900 font-bold mb-5">কোর্স ইন্সট্রাক্টর</h1>

            <div className="items-center rounded border border-gray-100 drop-shadow-md bg-white p-4 flex gap-4">
              <img
                className="w-[73px] h-[73px] rounded-full"
                src="https://cdn.10minuteschool.com/images/instructors/sakib-bin-rashid.jpg"
                alt=""
              />

              <div>
                <h1 className="text-black font-semibold text-[20px]">Sakib Bin Rashid</h1>
                <p className="text-black">DU (12+ Years Exp)</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-3xl text-gray-900 font-bold mb-5">কোর্সটি করে যা শিখবেন</h1>
            <div className="border border-gray-100 rounded shadow mb-10">
              <ul className="grid grid-cols-2 text-black px-7 py-6 gap-7 list-disc text-[15px]">
                <li>নিনিয়ম মুখস্থ না করে প্র্যাকটিকাল উদাহরণের মাধ্যমে ইংরেজি গ্রামার শেখার সহজ উপায়।</li>

                <li>স্কুল-কলেজের পরীক্ষা এবং ভর্তি পরীক্ষায় সহজ টেকনিকে ইংলিশ গ্রামার -এর সব ভয় দূর করা।</li>
                <li>ইংরেজিতে বাক্য গঠনের সহজ থেকে জটিল বিষয়গুলোর সম্পর্কে সঠিক ধারণা।</li>
                <li>
                  আত্মবিশ্বাসের সাথে Fluently ইংরেজিতে কথা বলা এবং কোনো গ্রামাটিক্যাল ভুল ছাড়াই ইংরেজি লেখা।
                </li>
                <li>কারো সাথে কথা বলার সময় ইংরেজি গ্রামার এর কমন ভুলগুলো এড়িয়ে চলা।</li>
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
<<<<<<< HEAD:src/components/CourseDetails.jsx
            <div className=''>
=======
            <div className="">
>>>>>>> 63a5040a4c26d85bfdf7b80715fc77d777a35740:src/components/course/CourseDetails.jsx
              <img
                className="w-[650px]"
                src="https://cdn.10minuteschool.com/lg/images/thumbnails/skills/english-grammar-crash-course-course-thumbnail-by-sakib-bin-rashid-16x9.jpg"
                alt=""
              />

              <h1 className="text-3xl text-gray-900 font-bold mt-5 mb-5 mx-4">$0.000</h1>

              <div className="mx-5 mb-5">
                <button className="btn bg-green-300 border-none text-white text-bold text-lg w-full">
                  Enroll Now
                </button>
              </div>

              <div className="mx-10 mb-8 mt-7 text-[15px] text-gray-800">
                <ul className="list-disc">
                  <li className="my-2">কোর্সটি করছেন ১৭৫৮৯ জন</li>
                  <li className="my-2">সময় লাগবে ২৫ ঘন্টা</li>
                  <li className="my-2">১০০টি ভিডিও</li>
                  <li className="my-2">১০০ সেট কুইজ</li>
                  <li className="my-2">১০০টি নোট</li>

                  <li className="my-2">সময়সীমা ৬ মাস</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
