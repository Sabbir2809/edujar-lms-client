import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
const TestimonialSlide = () => {
  const breakpoints = {
    // when window width is >= 390px
    390: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  const review = [
    {
      id: 1,
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg",
      name: "Anna Smith",
      comments:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla eaodio quia similique corrupti magnam.",
    },
    {
      id: 2,
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg",
      name: "Anna Smith",
      comments:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla eaodio quia similique corrupti magnam.",
    },
    {
      id: 3,
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg",
      name: "Anna Smith",
      comments:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla eaodio quia similique corrupti magnam.",
    },
    {
      id: 4,
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg",
      name: "Anna Smith",
      comments:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla eaodio quia similique corrupti magnam.",
    },
    {
      id: 5,
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg",
      name: "Anna Smith",
      comments:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla eaodio quia similique corrupti magnam.",
    },
  ];

  return (
    <div className="p-16 bg-slate-50">
      <div className="text-center pb-3 md:pb-10">
        <h1 className="text-3xl font-bold">
          <span className="text-success">Testimonials</span>
        </h1>
        <p className="font-bold">What our student say about us</p>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={breakpoints}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={600}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay]}
      >
        {review.map((item, i) => (
          <SwiperSlide>
            <div className="block rounded-lg bg-white p-8">
              <div className="">
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    className="rounded-full border-2"
                    width={70}
                    alt={item.name}
                  />
                </div>
                <p className="my-2 text-xl text-center font-semibold">
                  {item.name}
                </p>
              </div>
              <div>
                <p className="text-center">{item.comments}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlide;
