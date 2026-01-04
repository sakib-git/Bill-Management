import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Section from '../Components/Section';
import LatestBills from '../Components/LatestBills';
import Section2 from '../Components/Section2';
import Banner2 from '../Components/Banner2';
import Newsletter from '../Components/Newsletter';
import Fqa from '../Components/Fqa';
import WhyChooseUs from '../Components/WhyChooseUs';
import Benefits from '../Components/Benefits';

const Home = () => {
  return (
    <div>
      <div className="">
        <Banner2></Banner2>
      </div>

      <div className="mx-2 md:mx-3">
        <div className="mx-auto max-w-[1440px]  ">
          <title>Home</title>

          <div>
            <Category></Category>
          </div>
          <div>
            <LatestBills></LatestBills>
          </div>
          <div className='my-10'>
            <WhyChooseUs></WhyChooseUs>
          </div>
          <div>
           <Benefits></Benefits>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-center my-10">Key Features</h1>

            <Banner></Banner>
          </div>
          <div>
            <Section></Section>
          </div>
        </div>
        <div>
          <Section2></Section2>
        </div>
        <div>
       <Fqa></Fqa>
        </div>
      </div>
        <div>
        <Newsletter></Newsletter>
        </div>
    </div>
  );
};

export default Home;
