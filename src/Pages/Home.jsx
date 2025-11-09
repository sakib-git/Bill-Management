import React from 'react';
import Banner from '../Components/Banner';

const Home = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <div className='mt-20 max-xl:px-5'>
        <Banner></Banner>
      </div>
<h1 className="text-4xl font-bold text-red-500">Tailwind is working!</h1>
    </div>
  );
};

export default Home;