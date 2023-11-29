import wl1 from "./../assets/wl1.png";
import wl2 from "./../assets/wl2.png";
import wl3 from "./../assets/wl3.png";

const WhyLearn = () => {
  const learnData = [
    {
      topic: "Video Learning",
      des: "The Online Learning Platform aims to provide a web-based platform for students to access courses, interact with instructors, and administrators to manage courses and user data efficiently.",
      icon: wl1,
    },
    {
      topic: "Sharing",
      des: "The Online Learning Platform aims to provide a web-based platform for students to access courses, interact with instructors, and administrators to manage courses and user data efficiently.",
      icon: wl2,
    },
    {
      topic: "Practice",
      des: "The Online Learning Platform aims to provide a web-based platform for students to access courses, interact with instructors, and administrators to manage courses and user data efficiently.",
      icon: wl3,
    },
  ];
  return (
    <div>
      <div className="bg-gradient-to-l from-sky-500 to-indigo-500 w-full h-[100%] pb-28 lg:pl-36 lg:pr-36">
        <div>
          <h1
            className="text-white font-bold text-7xl tracking-wide pt-24 text-center"
            style={{ fontFamily: "Rowdies" }}>
            Why <span className="text-[#4BE5CA]">learn</span> with our courses?
          </h1>

          <p className="text-white font-light text-[18px] pt-5 text-center" style={{ fontFamily: "Saira" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod temporidunt ut
            labore veniam...
          </p>
        </div>

        <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 2xl:pt-20 pt-14 2xl:pr-60 gap-y-10">
          {learnData.map((item, index) => (
            <div
              key={index}
              className="2xl:pl-0 2xl:pt-20 pl-5 lg:pl-[10%] lg:pt-20 2xl:w-[150%] 2xl:h-[120%]">
              <img
                className="w-[80px] h-[80px] 2xl:ml-[43%] lg:ml-[39%] ml-[40%] md:ml-[46%]"
                src={item.icon}
                alt=""
              />
              <h1
                className="text-white font-semibold text-2xl pt-5 tracking-wide text-center"
                style={{ fontFamily: "Rowdies" }}>
                {index + 1}. {item.topic}
              </h1>
              <p
                className="text-white font-light text-[14px] pt-5 text-center"
                style={{ fontFamily: "Saira" }}>
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyLearn;
