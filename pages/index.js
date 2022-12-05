import Activities from '@/components/home/activities';
import Banner from '@/components/home/banner';
import Founder from '@/components/home/founder';
import Mission from '@/components/home/mission';
import Registration from '@/components/home/registration';
import Vision from '@/components/home/vision/vision';
import Contact from '@/components/home/contact/contact';
import styles from '../styles/Home.module.scss';
import Line from '@/components/line';

const Home = () => {
  const randomWidth = () => {
    return Math.random() * (80 - 40) + 40;
  };
  return (
    <div className={styles.root}>
      <Banner />
      <Vision />
      <Line direction={'left'} width={randomWidth()} />
      <Mission />
      <Line direction={'right'} width={randomWidth()} />
      <Activities />
      <Line direction={'left'} width={randomWidth()} />
      <Founder />
      <Line direction={'right'} width={randomWidth()} />
      <Registration />
      <Line direction={'left'} width={randomWidth()} />
      <Contact />
    </div>
  );
};

export default Home;
