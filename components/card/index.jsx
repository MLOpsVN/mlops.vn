import styles from './card.module.scss';
import Image from 'next/image';

const Card = ({ icon, title, content }) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <Image src={icon} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.contents}>
        {content?.map?.((ctx, index) => {
          return <div className={styles.content} key={index}>&#8226; {ctx}</div>;
        })}
      </div>
    </div>
  );
};

export default Card;
