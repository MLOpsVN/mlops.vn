import Card from '@/components/card';
import TitleSection from '@/components/title_section';
import styles from './activities.module.scss';
import Training from '@/assets/svgs/training.svg';
import Mentoring from '@/assets/svgs/mentoring.svg';
import Consultation from '@/assets/svgs/clarity.svg';

const Activities = () => {
  return (
    <div className={styles.root} id="activities">
      <div className={styles.content_w}>
        <div className={styles.title}>
          <TitleSection title={'Activities'} />
        </div>

        <div className={styles.card}>
          {cards?.map?.((card, index) => {
            return (
              <div key={index}>
                <Card {...card} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;

const cards = [
  {
    icon: Training,
    title: 'Training program',
    content: ['Organize training events for AI community'],
  },
  {
    icon: Mentoring,
    title: 'Mentoring program',
    content: ['Connect AI enthusiastic and potential youngers with AI experts to plan and shape their future'],
  },
  {
    icon: Consultation,
    title: 'Consultation',
    content: [
      'Give advice on building ML systems for individuals and organizations',
      'Give advice on career paths for AI enthusiastic youngers',
    ],
  },
];
