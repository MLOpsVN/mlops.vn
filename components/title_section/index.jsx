import styles from './TitleSection.module.scss';

const TitleSection = ({ title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.dot}></div>
      <div className={styles.title_wrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default TitleSection;
