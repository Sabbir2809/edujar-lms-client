import React from 'react';

const Card = () => {
    return (
        <div>

            <div className="w-full h-[1600px] bg-gradient-to-r from-sky-100 to-slate-100 ">

                <div>

                    <h1 className='text-8xl font-bold text-center pt-14 pb-7 text-black tracking-wide' style={{fontFamily: 'Rowdies'}}>
                        Featured <span className='text-[#2AAA94]'>Course</span>
                    </h1>

                    <p className='text-1xl text-center text-black tracking-wide pb-10 font-normal' style={{fontFamily: 'Saira'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>do eiusmod temporidunt ut labore veniam...
                    </p>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pl-10 pl-6 lg:pl-32 pr-4 md:pr-0 md:gap-y-4 lg:gap-x-3 lg:gap-y-10'>
                    <div className="card static lg:w-[510px] w-[360px] md:w-96 bg-white shadow-xl hover:shadow-2xl">
                        <figure><img src="https://s3-alpha-sig.figma.com/img/0d5e/481e/1bce470b3cf2a8d3033b20effb566dc8?Expires=1701043200&Signature=CNIr-sTrkzFk2B3zQL1DIXAR-bL36LN-e7wm5Vg8CN6R82zFXOyU6tcHbFBNN0y-302Es0Ts6ORA2cKBXtunivMUwyqsFNZsPlL977PYWT~E84qJHbAqhQOfUxQ3XNxp-Ku-kv2412L0KyUPF1jkpG-oD7-wujz94vl~7tXPcJPsGikWYhRubj7mtQc8LYsvByjJj8Wv~rbpWuOUf2Q0yOJu13qenI9WMhvnAgOT~63EcdL~tDVCRdiyjTr3puDh2C09Uuy7~-ruhh58iqLXgtrcCmB45zqZL7GXGjLmpemhFoLJqmZjtKQT9gxwqD2Hz95oWLSor83lg7RqRKmklw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center text-black font-semibold pb-2" style={{fontFamily: 'Saira'}}>
                                <p className='text-[12px]'>5,957 Students</p>
                                <p className='text-[12px] lg:pl-72 pl-40 md:pl-40'> 01h 49m</p>
                            </div>
                            <h2 className="card-title text-black" style={{fontFamily: 'Saira'}}>Motion Graphics: Create a Nice
                                Typography Animation</h2>
                            <div className="card-actions justify-between pt-8">
                                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{fontFamily: 'Saira'}}>$33.99</h1>
                                <button className="btn btn-primary h-7">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card static lg:w-[510px] w-96 md:w-96 bg-white shadow-xl">
                        <figure><img src="https://s3-alpha-sig.figma.com/img/0d5e/481e/1bce470b3cf2a8d3033b20effb566dc8?Expires=1701043200&Signature=CNIr-sTrkzFk2B3zQL1DIXAR-bL36LN-e7wm5Vg8CN6R82zFXOyU6tcHbFBNN0y-302Es0Ts6ORA2cKBXtunivMUwyqsFNZsPlL977PYWT~E84qJHbAqhQOfUxQ3XNxp-Ku-kv2412L0KyUPF1jkpG-oD7-wujz94vl~7tXPcJPsGikWYhRubj7mtQc8LYsvByjJj8Wv~rbpWuOUf2Q0yOJu13qenI9WMhvnAgOT~63EcdL~tDVCRdiyjTr3puDh2C09Uuy7~-ruhh58iqLXgtrcCmB45zqZL7GXGjLmpemhFoLJqmZjtKQT9gxwqD2Hz95oWLSor83lg7RqRKmklw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center text-black font-semibold pb-2" style={{fontFamily: 'Saira'}}>
                                <p className='text-[12px]'>5,957 Students</p>
                                <p className='text-[12px] lg:pl-72 pl-40 md:pl-40'> 01h 49m</p>
                            </div>
                            <h2 className="card-title text-black" style={{fontFamily: 'Saira'}}>Motion Graphics: Create a Nice
                                Typography Animation</h2>
                            <div className="card-actions justify-between pt-8">
                                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{fontFamily: 'Saira'}}>$33.99</h1>
                                <button className="btn btn-primary h-7">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card static lg:w-[510px] w-96 md:w-96 bg-white shadow-xl">
                        <figure><img src="https://s3-alpha-sig.figma.com/img/0d5e/481e/1bce470b3cf2a8d3033b20effb566dc8?Expires=1701043200&Signature=CNIr-sTrkzFk2B3zQL1DIXAR-bL36LN-e7wm5Vg8CN6R82zFXOyU6tcHbFBNN0y-302Es0Ts6ORA2cKBXtunivMUwyqsFNZsPlL977PYWT~E84qJHbAqhQOfUxQ3XNxp-Ku-kv2412L0KyUPF1jkpG-oD7-wujz94vl~7tXPcJPsGikWYhRubj7mtQc8LYsvByjJj8Wv~rbpWuOUf2Q0yOJu13qenI9WMhvnAgOT~63EcdL~tDVCRdiyjTr3puDh2C09Uuy7~-ruhh58iqLXgtrcCmB45zqZL7GXGjLmpemhFoLJqmZjtKQT9gxwqD2Hz95oWLSor83lg7RqRKmklw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center text-black font-semibold pb-2" style={{fontFamily: 'Saira'}}>
                                <p className='text-[12px]'>5,957 Students</p>
                                <p className='text-[12px] lg:pl-72 pl-40 md:pl-40'> 01h 49m</p>
                            </div>
                            <h2 className="cbold card-title text-black" style={{fontFamily: 'Saira'}}>Motion Graphics: Create a Nice
                                Typography Animation</h2>
                            <div className="card-actions justify-between pt-8">
                                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{fontFamily: 'Saira'}}>$33.99</h1>
                                <button className="btn btn-primary h-7">Buy Now</button>
                            </div>
                        </div>
                    </div>


                    <div className="card static lg:w-[510px] w-96 md:w-96 bg-white shadow-xl">
                        <figure><img src="https://s3-alpha-sig.figma.com/img/0d5e/481e/1bce470b3cf2a8d3033b20effb566dc8?Expires=1701043200&Signature=CNIr-sTrkzFk2B3zQL1DIXAR-bL36LN-e7wm5Vg8CN6R82zFXOyU6tcHbFBNN0y-302Es0Ts6ORA2cKBXtunivMUwyqsFNZsPlL977PYWT~E84qJHbAqhQOfUxQ3XNxp-Ku-kv2412L0KyUPF1jkpG-oD7-wujz94vl~7tXPcJPsGikWYhRubj7mtQc8LYsvByjJj8Wv~rbpWuOUf2Q0yOJu13qenI9WMhvnAgOT~63EcdL~tDVCRdiyjTr3puDh2C09Uuy7~-ruhh58iqLXgtrcCmB45zqZL7GXGjLmpemhFoLJqmZjtKQT9gxwqD2Hz95oWLSor83lg7RqRKmklw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center text-black font-semibold pb-2" style={{fontFamily: 'Saira'}}>
                                <p className='text-[12px]'>5,957 Students</p>
                                <p className='text-[12px] lg:pl-72 pl-40 md:pl-40'> 01h 49m</p>
                            </div>
                            <h2 className="cbold card-title text-black" style={{fontFamily: 'Saira'}}>Motion Graphics: Create a Nice
                                Typography Animation</h2>
                            <div className="card-actions justify-between pt-8">
                                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{fontFamily: 'Saira'}}>$33.99</h1>
                                <button className="btn btn-primary h-7">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card static lg:w-[510px] w-96 md:w-96 bg-white shadow-xl">
                        <figure><img src="https://s3-alpha-sig.figma.com/img/0d5e/481e/1bce470b3cf2a8d3033b20effb566dc8?Expires=1701043200&Signature=CNIr-sTrkzFk2B3zQL1DIXAR-bL36LN-e7wm5Vg8CN6R82zFXOyU6tcHbFBNN0y-302Es0Ts6ORA2cKBXtunivMUwyqsFNZsPlL977PYWT~E84qJHbAqhQOfUxQ3XNxp-Ku-kv2412L0KyUPF1jkpG-oD7-wujz94vl~7tXPcJPsGikWYhRubj7mtQc8LYsvByjJj8Wv~rbpWuOUf2Q0yOJu13qenI9WMhvnAgOT~63EcdL~tDVCRdiyjTr3puDh2C09Uuy7~-ruhh58iqLXgtrcCmB45zqZL7GXGjLmpemhFoLJqmZjtKQT9gxwqD2Hz95oWLSor83lg7RqRKmklw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center text-black font-semibold pb-2" style={{fontFamily: 'Saira'}}>
                                <p className='text-[12px]'>5,957 Students</p>
                                <p className='text-[12px] lg:pl-72 pl-40 md:pl-40'> 01h 49m</p>
                            </div>
                            <h2 className="cbold card-title text-black" style={{fontFamily: 'Saira'}}>Motion Graphics: Create a Nice
                                Typography Animation</h2>
                            <div className="card-actions justify-between pt-8">
                                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{fontFamily: 'Saira'}}>$33.99</h1>
                                <button className="btn btn-primary h-7">Buy Now</button>
                            </div>
                        </div>
                    </div>


                    <div className="card static lg:w-[510px] w-96 md:w-96 bg-white shadow-xl">
                        <figure><img src="https://s3-alpha-sig.figma.com/img/0d5e/481e/1bce470b3cf2a8d3033b20effb566dc8?Expires=1701043200&Signature=CNIr-sTrkzFk2B3zQL1DIXAR-bL36LN-e7wm5Vg8CN6R82zFXOyU6tcHbFBNN0y-302Es0Ts6ORA2cKBXtunivMUwyqsFNZsPlL977PYWT~E84qJHbAqhQOfUxQ3XNxp-Ku-kv2412L0KyUPF1jkpG-oD7-wujz94vl~7tXPcJPsGikWYhRubj7mtQc8LYsvByjJj8Wv~rbpWuOUf2Q0yOJu13qenI9WMhvnAgOT~63EcdL~tDVCRdiyjTr3puDh2C09Uuy7~-ruhh58iqLXgtrcCmB45zqZL7GXGjLmpemhFoLJqmZjtKQT9gxwqD2Hz95oWLSor83lg7RqRKmklw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center text-black font-semibold pb-2" style={{fontFamily: 'Saira'}}>
                                <p className='text-[12px]'>5,957 Students</p>
                                <p className='text-[12px] lg:pl-72 pl-40 md:pl-40'> 01h 49m</p>
                            </div>
                            <h2 className="cbold card-title text-black" style={{fontFamily: 'Saira'}}>Motion Graphics: Create a Nice
                                Typography Animation</h2>
                            <div className="card-actions justify-between pt-8">
                                <h1 className="text-[#2AAA94] font-bold text-2xl mt-2" style={{fontFamily: 'Saira'}}>$33.99</h1>
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