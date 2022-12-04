import Activities from '@/components/home/activities';
import Banner from '@/components/home/banner';
import Founder from '@/components/home/founder';
import Mission from '@/components/home/mission';
import Registration from '@/components/home/registration';
import Vision from '@/components/home/vision/vision';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Banner />
      <Vision />
      <Mission />
      <Activities />
      <Founder />
      <Registration />
    </div>
  );
};

export default Home;
