import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.filter}></div>
      <div className={styles.intro}>
        <div>Lorem Ipsum is simply dummy text of the. </div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text
          ever since the 1500s
        </div>
        <div>Discover more</div>
      </div>
      <div className={styles.img_bg}></div>
    </div>
  );
};

export default Banner;
