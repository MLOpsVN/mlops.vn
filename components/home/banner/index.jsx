import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.filter}></div>
      <div className={styles.intro}>
        <div>Unleash your MLOps potential in the AI era</div>
        <div>
          Empowering your team with a set of MLOps skills to build a reusable MLOps platform using the latest technologies and best practices from AI leading companies over the world.
        </div>
        <div>
          <a href="#vision">Discover more</a>
        </div>
      </div>
      <div className={styles.img_bg}></div>
    </div>
  );
};

export default Banner;
