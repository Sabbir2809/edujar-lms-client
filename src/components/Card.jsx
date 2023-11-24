import cardImage from "./../assets/cardImage.jpeg";

const Card = () => {
  return (
    <div className=''>
      <div className=" w-full h-[100%] bg-gradient-to-r from-sky-100 to-slate-100 pb-20">
        <div className=''>
          <h1
            className="text-8xl font-bold text-center pt-14 pb-7 text-black tracking-wide"
            style={{ fontFamily: "Rowdies" }}>
            Featured <span className="text-[#2AAA94]">Course</span>
          </h1>

          <p
            className="text-1xl text-center text-black tracking-wide pb-10 font-normal"
            style={{ fontFamily: "Saira" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
            do eiusmod temporidunt ut labore veniam...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pl-24 pl-6 2xl:pl-36 lg:pl-10 pr-4 md:pr-0 gap-y-4 md:gap-y-4 lg:gap-x-3 lg:gap-y-10">
          <div className=" card static 2xl:w-[90%] lg:w-[90%] md:w-96 bg-white shadow-xl hover:shadow-2xl">
            <figure>
              <img src={cardImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div
                className="items-center text-black font-semibold pb-2 flex"
                style={{ fontFamily: "Saira" }}>
                <p className="text-[12px]">5,957 Students</p>
                <p className="pl-[65%] text-[12px] "> 01h:49m</p>
              </div>
              <h2 className="card-title text-black" style={{ fontFamily: "Saira" }}>
                Motion Graphics: Create a Nice Typography Animation
              </h2>
              <div className="card-actions justify-between pt-8">
                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{ fontFamily: "Saira" }}>
                  $33.99
                </h1>
                <button className="btn btn-primary h-7">Buy Now</button>
              </div>
            </div>
          </div>

          <div className=" card static 2xl:w-[90%] lg:w-[90%] md:w-96 bg-white shadow-xl hover:shadow-2xl">
            <figure>
              <img src={cardImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div
                  className="items-center text-black font-semibold pb-2 flex"
                  style={{ fontFamily: "Saira" }}>
                <p className="text-[12px]">5,957 Students</p>
                <p className="pl-[65%] text-[12px] "> 01h:49m</p>
              </div>
              <h2 className="card-title text-black" style={{ fontFamily: "Saira" }}>
                Motion Graphics: Create a Nice Typography Animation
              </h2>
              <div className="card-actions justify-between pt-8">
                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{ fontFamily: "Saira" }}>
                  $33.99
                </h1>
                <button className="btn btn-primary h-7">Buy Now</button>
              </div>
            </div>
          </div>

          <div className=" card static 2xl:w-[90%] lg:w-[90%] md:w-96 bg-white shadow-xl hover:shadow-2xl">
            <figure>
              <img src={cardImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div
                  className="items-center text-black font-semibold pb-2 flex"
                  style={{ fontFamily: "Saira" }}>
                <p className="text-[12px]">5,957 Students</p>
                <p className="pl-[65%] text-[12px] "> 01h:49m</p>
              </div>
              <h2 className="card-title text-black" style={{ fontFamily: "Saira" }}>
                Motion Graphics: Create a Nice Typography Animation
              </h2>
              <div className="card-actions justify-between pt-8">
                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{ fontFamily: "Saira" }}>
                  $33.99
                </h1>
                <button className="btn btn-primary h-7">Buy Now</button>
              </div>
            </div>
          </div>

          <div className=" card static 2xl:w-[90%] lg:w-[90%] md:w-96 bg-white shadow-xl hover:shadow-2xl">
            <figure>
              <img src={cardImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div
                  className="items-center text-black font-semibold pb-2 flex"
                  style={{ fontFamily: "Saira" }}>
                <p className="text-[12px]">5,957 Students</p>
                <p className="pl-[65%] text-[12px] "> 01h:49m</p>
              </div>
              <h2 className="card-title text-black" style={{ fontFamily: "Saira" }}>
                Motion Graphics: Create a Nice Typography Animation
              </h2>
              <div className="card-actions justify-between pt-8">
                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{ fontFamily: "Saira" }}>
                  $33.99
                </h1>
                <button className="btn btn-primary h-7">Buy Now</button>
              </div>
            </div>
          </div>

          <div className=" card static 2xl:w-[90%] lg:w-[90%] md:w-96 bg-white shadow-xl hover:shadow-2xl">
            <figure>
              <img src={cardImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div
                  className="items-center text-black font-semibold pb-2 flex"
                  style={{ fontFamily: "Saira" }}>
                <p className="text-[12px]">5,957 Students</p>
                <p className="pl-[65%] text-[12px] "> 01h:49m</p>
              </div>
              <h2 className="card-title text-black" style={{ fontFamily: "Saira" }}>
                Motion Graphics: Create a Nice Typography Animation
              </h2>
              <div className="card-actions justify-between pt-8">
                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{ fontFamily: "Saira" }}>
                  $33.99
                </h1>
                <button className="btn btn-primary h-7">Buy Now</button>
              </div>
            </div>
          </div>


          <div className=" card static 2xl:w-[90%] lg:w-[90%] md:w-96 bg-white shadow-xl hover:shadow-2xl">
            <figure>
              <img src={cardImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div
                  className="items-center text-black font-semibold pb-2 flex"
                  style={{ fontFamily: "Saira" }}>
                <p className="text-[12px]">5,957 Students</p>
                <p className="pl-[65%] text-[12px] "> 01h:49m</p>
              </div>
              <h2 className="card-title text-black" style={{ fontFamily: "Saira" }}>
                Motion Graphics: Create a Nice Typography Animation
              </h2>
              <div className="card-actions justify-between pt-8">
                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{ fontFamily: "Saira" }}>
                  $33.99
                </h1>
                <button className="btn btn-primary h-7">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
