import React from 'react';

const CourseDetails = () => {
    return (
        <div className=''>

            <div className='mx-auto max-w-screen-xl px-4 grid lg:grid-cols-2 bg-green-600'>
                <section className='text-center'>
                    <div>
                        <h1 className='text-4xl text-black font-bold'>English Grammar Crash Course</h1>
                        <p className='text-black'>
                            English Grammar এর নিয়ম মুখস্থ না করে সহজেই শিখে নিন গ্রামার ব্যবহারের উপায়। ১০০টি ভিডিও ক্লাসের মাধ্যমে শিখুন Sentence Structure, Tense সহ গুরুত্বপূর্ণ সব গ্রামার টপিক। এনরোল করুন আজই!
                        </p>
                    </div>
                </section>
                <section className='text-center'>
                    <div>
                        <h1 className='text-4xl md:text-7xl text-gray-900 font-bold mb-4'>English Grammar Crash Course</h1>
                    </div>

                </section>
            </div>

        </div>
    );
};

export default CourseDetails;

