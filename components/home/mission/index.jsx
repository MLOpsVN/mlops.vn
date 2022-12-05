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
            Efficiency: Help organizations build better ML systems faster, by using MLOps best practices in the AI industry.
            <br/>
            <br/>
            Societal Impacts: Contribute to the growth of AI community in Vietnam, especially to the MLOps community.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
