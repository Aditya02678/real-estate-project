import React, { useState } from 'react';
import CountUp from 'react-countup';
import { LiaCertificateSolid } from 'react-icons/lia';

import { useEffect } from 'react';
const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statistics = [
    { label: 'Families Served', value: 200 },
    { label: 'Different cities', value: 4 },
    { label: 'Years of experience', value: 10 },
  ];
  useEffect(() => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      const top = aboutSection.getBoundingClientRect().top;
      const visible = top < window.innerHeight - 100;

      if (visible) {
        setIsVisible(true);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <section id='about' className='mx-auto max-w-[1440px]'>
      {/* container */}

      <div className='flex flex-col xl:flex-row'>
        {/* left side */}
        <div className='flex-[6] flex justify-center flex-col   bg-[#008274] text-white px-6 lg:px-6 py-16'>
          <h2 className='h2'>Achievements</h2>

          <p className='py-5 text-white max-w-[47rem] '>
            From initial search to final keys, we provide the solid foundation
            for over 1,200 families to build their future upon.
          </p>

          {/* Statistics container */}

          <div className='flex flex-wrap gap-4'>
            {statistics.map((statistic, index) => (
              <div key={index} className='p-4 rounded-lg'>
                <div className='flex items-center gap-2'>
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={statistic.value}
                    duration={10}
                  >
                    {({ countUpRef }) => (
                      <h3 ref={countUpRef} className="text-5xl font-sans"></h3>
                    )}
                  </CountUp>

                  <h4 className="regular-32">k+</h4>
                </div>

                <p className='text-white capitalize pt-2 '>{statistic.label}</p>
              </div>
            ))}
          </div>
        </div>

            {/* Right side */}

            <div className='flex-[2] relative bg-primary px-6 lg:px-12 py-16 flexCenter'>
            <div className='p-4 rounded-lg flexCenter flex-col xl:-rotate-90 '>

              <span className="relative bottom-8 p-3 flex items-center rounded-full"><LiaCertificateSolid className='text-5xl text-black' /></span>

            <span className='relative bottom-3'>Awarded 'Best in Customer Satisfaction' for our commitment to your journey.</span>
            </div>


            </div>


      </div>
    </section>
  );
};

export default Achievements;
