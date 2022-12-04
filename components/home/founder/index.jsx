import TitleSection from '@/components/title_section';
import FounderCard from '@/components/founder_card';
import styles from './founder.module.scss';

const Founder = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <TitleSection title={'Activities'} />
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
  );
};

export default Founder;

const founders = [
  {
    img: '/founder.png',
    name: 'Tung Dao',
    role: 'Senior ML Engineer',
    org: 'Shopee',
  },
  {
    img: '/founder.png',
    name: 'Tung Dao',
    role: 'Senior ML Engineer',
    org: 'Shopee',
  },
  {
    img: '/founder.png',
    name: 'Tung Dao',
    role: 'Senior ML Engineer',
    org: 'Shopee',
  },
  {
    img: '/founder.png',
    name: 'Tung Dao',
    role: 'Senior ML Engineer',
    org: 'Shopee',
  },
];
