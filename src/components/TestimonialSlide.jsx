import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode,Autoplay } from 'swiper/modules';
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

    return (
        <div className="p-10 bg-slate-200">
            <div className="text-center">
                <h1 className="text-3xl font-bold">
                     <span className="text-success">Testimonials</span>
                </h1>
                <p className="font-bold">What our student say about us</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={breakpoints}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode,Autoplay]}
            >
                <SwiperSlide>
                    <div className="m-4 block rounded-lg bg-white p-6 shadow">
                        <div className="">
                            <div className=" flex items-center justify-center gap-5 md:mx-0 md:w-96 lg:mb-0">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-full shadow-md" width={50} alt="" />
                                <p className="mb-2 text-xl font-semibold">
                                    Anna Smith
                                </p>
                            </div>
                            <div className="md:ml-6">
                                <p className="my-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                                    quam sapiente molestiae numquam quas, voluptates omnis nulla
                                    ea odio quia similique corrupti magnam.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="m-4 block rounded-lg bg-white p-6 shadow">
                        <div className="">
                            <div className=" flex items-center justify-center gap-5 md:mx-0 md:w-96 lg:mb-0">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-full shadow-md" width={50} alt="" />
                                <p className="mb-2 text-xl font-semibold">
                                    Anna Smith
                                </p>
                            </div>
                            <div className="md:ml-6">
                                <p className="my-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                                    quam sapiente molestiae numquam quas, voluptates omnis nulla
                                    ea odio quia similique corrupti magnam.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="m-4 block rounded-lg bg-white p-6 shadow">
                        <div className="">
                            <div className=" flex items-center justify-center gap-5 md:mx-0 md:w-96 lg:mb-0">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-full shadow-md" width={50} alt="" />
                                <p className="mb-2 text-xl font-semibold">
                                    Anna Smith
                                </p>
                            </div>
                            <div className="md:ml-6">
                                <p className="my-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                                    quam sapiente molestiae numquam quas, voluptates omnis nulla
                                    ea odio quia similique corrupti magnam.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="m-4 block rounded-lg bg-white p-6 shadow">
                        <div className="">
                            <div className=" flex items-center justify-center gap-5 md:mx-0 md:w-96 lg:mb-0">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-full shadow-md" width={50} alt="" />
                                <p className="mb-2 text-xl font-semibold">
                                    Anna Smith
                                </p>
                            </div>
                            <div className="md:ml-6">
                                <p className="my-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                                    quam sapiente molestiae numquam quas, voluptates omnis nulla
                                    ea odio quia similique corrupti magnam.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="m-4 block rounded-lg bg-white p-6 shadow">
                        <div className="">
                            <div className=" flex items-center justify-center gap-5 md:mx-0 md:w-96 lg:mb-0">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-full shadow-md" width={50} alt="" />
                                <p className="mb-2 text-xl font-semibold">
                                    Anna Smith
                                </p>
                            </div>
                            <div className="md:ml-6">
                                <p className="my-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                                    quam sapiente molestiae numquam quas, voluptates omnis nulla
                                    ea odio quia similique corrupti magnam.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )}

export default TestimonialSlide;