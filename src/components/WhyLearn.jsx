import React from 'react';

const WhyLearn = () => {
    return (
        <div>

            <div className="bg-gradient-to-l from-violet-600 via-violet-600 to-indigo-500  w-full h-[750px] lg:pl-36 lg:pr-36">
                <div>

                    <h1 className='text-white font-bold text-7xl tracking-wide pt-24 text-center' style={{fontFamily: "Rowdies",}}>
                        Why <span className="text-[#4BE5CA]">learn</span> with our courses?
                    </h1>

                    <p className="text-white font-light text-[18px] pt-5 text-center" style={{fontFamily: "Saira",}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod temporidunt ut labore veniam...
                    </p>

                </div>

                <div className='grid grid-cols-3 pt-20 pr-36'>

                    <div className="pl-52 pt-20 w-[500px] h-[300px]">
                        <img className='w-[80px] h-[80px] ml-28'  src="./src/styles/assets/wl1.png" alt=""/>
                        <h1 className='text-white font-semibold text-2xl pt-5 tracking-wide text-center' style={{fontFamily: "Rowdies",}}>
                            01. Learn
                        </h1>
                        <p className="text-white font-light text-[14px] pt-5 text-center" style={{fontFamily: "Saira",}}>
                            Lorem ipsum dolor sit amet, consectetur  <br/>  adipiscing elit, sed doeiusmod  <br/>  temporidunt ut labore veniam...
                        </p>
                    </div>



                    <div className="pl-52 pt-20 w-[500px] h-[300px]">
                        <img className='w-[80px] h-[80px] ml-28'  src="./src/styles/assets/wl2.png" alt=""/>
                        <h1 className='text-white font-semibold text-2xl pt-5 tracking-wide text-center' style={{fontFamily: "Rowdies",}}>
                            02. Greduate
                        </h1>
                        <p className="text-white font-light text-[14px] pt-5 text-center" style={{fontFamily: "Saira",}}>
                            Lorem ipsum dolor sit amet, consectetur  <br/>  adipiscing elit, sed doeiusmod  <br/>  temporidunt ut labore veniam...
                        </p>
                    </div>



                    <div className="pl-52 pt-20 w-[500px] h-[300px]">
                        <img className='w-[80px] h-[80px] ml-28'  src="./src/styles/assets/wl3.png" alt=""/>
                        <h1 className='text-white font-semibold text-2xl pt-5 tracking-wide text-center' style={{fontFamily: "Rowdies",}}>
                            03. Work
                        </h1>
                        <p className="text-white font-light text-[14px] pt-5 text-center" style={{fontFamily: "Saira",}}>
                            Lorem ipsum dolor sit amet, consectetur  <br/>  adipiscing elit, sed doeiusmod  <br/>  temporidunt ut labore veniam...
                        </p>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default WhyLearn;