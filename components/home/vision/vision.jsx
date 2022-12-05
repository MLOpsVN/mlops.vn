import TitleSection from '@/components/title_section';
import styles from './vision.module.scss';

const Vision = () => {
  return (
    <div className={styles.root} id="vision">
      <div>
        <div>
          <div>
            <TitleSection title={'Vision'} />
          </div>
          <div className={styles.content}>
            Open Factor Foundation commits to enable Vietnamese youth to bring inclusive and effective AI solutions to industries and sectors. We empower the youth with systematic and practical best practices from global AI industry tailored for Vietnam market.
          </div>
        </div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export default Vision;
