import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Section from '../Components/Section';
import LatestBills from '../Components/LatestBills';
import Section2 from '../Components/Section2';
import Banner2 from '../Components/Banner2';

const Home = () => {
  return (
    <div>
      <div className="">
        <Banner2></Banner2>
        {/* <Banner></Banner> */}
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
          <div>
            <Section></Section>
          </div>
        </div>
        <div>
          <Section2></Section2>
        </div>
      </div>
    </div>
  );
};

export default Home;
