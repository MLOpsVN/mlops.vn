import TitleSection from '@/components/title_section';
import styles from './Vision.module.scss';

const Vision = () => {
  return (
    <div className={styles.root} id="vision">
      <div>
        <div>
          <div>
            <TitleSection title={'Vision'} />
          </div>
          <div className={styles.content}>
            An organization committed to filling the gap between AI in theories and AI in production by equalizing opportunities in the AI
            industry for AI enthusiastic youth in Vietnam.
          </div>
        </div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export default Vision;
