import TitleSection from '@/components/title_section';
import FounderCard from '@/components/founder_card';
import styles from './founder.module.scss';

const Founder = () => {
  return (
    <div className={styles.root} id="instructors">
      <div className={styles.content_w}>
        <div className={styles.title}>
          <TitleSection title={'Founders'} />
        </div>

        <div className={styles.card}>
          {founders?.map?.((founder, index) => {
            return (
              <div key={index}>
                <FounderCard {...founder} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Founder;

const founders = [
  {
    img: '/founders/tung-dao.jpg',
    name: 'Tung Dao',
    role: 'Senior ML Engineer',
    org: 'Shopee, Singapore',
  },
  {
    img: '/founders/quan-dang.jpeg',
    name: 'Quan Dang',
    role: 'Expert ML Engineer',
    org: 'Maritime Bank, Vietnam',
  },
  {
    img: '/founders/xuan-son-vu.png',
    name: 'Xuan-Son Vu',
    role: 'Senior Researcher',
    org: 'Umeå University, Sweden',
  },
  {
    img: '/founders/harry-nguyen.jpeg',
    name: 'Harry Nguyen',
    role: 'Assistant Professor',
    org: 'UCC, Ireland',
  },
];
