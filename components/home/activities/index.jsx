import Training from '@/assets/svgs/training.svg';
import Card from '@/components/card';
import TitleSection from '@/components/title_section';
import styles from './activities.module.scss';

const Activities = () => {
  return (
    <div className={styles.root}>
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
  );
};

export default Activities;

const cards = [
  {
    icon: Training,
    title: 'Training program',
    content: [
      'Targets: AI community Activities',
      'Activities',
      'Create tutorials on Github (code), Youtube (video)',
      'Organize training/sharing sessions/events (online/offline)',
    ],
  },
  {
    icon: Training,
    title: 'Training program',
    content: [
      'Targets: AI community Activities',
      'Activities',
      'Create tutorials on Github (code), Youtube (video)',
      'Organize training/sharing sessions/events (online/offline)',
    ],
  },
  {
    icon: Training,
    title: 'Training program',
    content: [
      'Consultation',
      'Building ML systems',
      'Targets: individuals, organizations (e.g. private corporations, NPOs/NGOs, etc.)',
      'Activities: to give advice on building ML pipelines: data pipeline, model development, model deployment, monitoring & maintenance',
      'Career development',
      'Targets: AI enthusiastic youngers',
      'Activities: to give advice on career paths',
    ],
  },
];
