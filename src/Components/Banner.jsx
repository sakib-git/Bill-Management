import React from 'react';
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        
          <SwiperSlide>
            <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-96 flex flex-col justify-center items-center text-white text-center p-4 rounded-xl overflow-hidden ">
              <h2 className="text-3xl font-bold mb-4">Track All Your Bills Easily</h2>
              <p className="text-lg max-w-xl">"View all your electricity, water, gas, or internet bills in one place. Easily analyze paid vs. unpaid bills through a graph."</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-r from-green-400 to-teal-500 h-96 flex flex-col justify-center items-center text-white text-center p-4 rounded-xl overflow-hidden ">
              <h2 className="text-3xl font-bold mb-4">Never Miss a Payment</h2>
              <p className="text-lg max-w-xl">Get reminder notifications according to your bill's due date, and never miss a payment again.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-96 flex flex-col justify-center items-center text-white text-center p-4 rounded-xl overflow-hidden ">
              <h2 className="text-3xl font-bold mb-4">Analyze Your Expenses</h2>
              <p className="text-lg max-w-xl">"View your utility expenses monthly or yearly in charts, and plan your budget easily." ✅</p>
            </div>
          </SwiperSlide>
     
        <div className="autoplay-progress" slot="container-end">
          <svg className="hidden" ref={progressCircle}></svg>
          {/* <circle ></circle> */}
          <span className="border px-2 py-1 rounded-full hidden" ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
