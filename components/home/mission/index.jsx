import TitleSection from '@/components/title_section';
import styles from './mission.module.scss';

const Mission = () => {
  return (
    <div className={styles.root}>
      <div className={styles.img}></div>
      <div>
        <div>
          <div>
            <TitleSection title={'Mission'} />
          </div>
          <div className={styles.content}>
            An organization committed to filling the gap between AI in theories and AI in production by equalizing opportunities in the AI
            industry for AI enthusiastic youth in Vietnam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
