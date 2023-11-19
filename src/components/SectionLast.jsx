import React from 'react';

const SectionLast = () => {
    return (
        <div>


            <div className="bg-gradient-to-t from-sky-100 to-slate-100 w-screen h-[1800px] lg:pl-36 lg:pr-36 lg:pt-14">


                <section>
                    <div className='grid grid-cols-2'>

                        <div>
                            <img className='w-[664px] h-[666px]' src="./src\styles\assets\homeEdu.png" alt="Rectangle 8" />
                        </div>

                        <div>
                            <h1 className='text-[#1D1D45] font-extrabold text-8xl pt-32 tracking-wide' style={{fontFamily: "Rowdies",}}>
                                The number one factor in <br/> <span className='text-[#2AAA94] font-extrabold text-9xl'>relevance drives out resistance.</span>
                            </h1>

                            <p className='text-[#1D1D45] font-normal text-1xl pt-8' style={{fontFamily: "Saira",}}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa  qui officia deserunt mollit <br/> anim id est laborum.
                            </p>

                            <button className='btn6 btn mt-10 text-[14px] text-white border-1 rounded-[8px] border-white p-3 font-medium tracking-normal' style={{fontFamily: "Saira",}}>Learn More</button>
                        </div>

                    </div>
                </section>

            </div>
            
        </div>
    );
};

export default SectionLast;