import Image from 'next/image';
import styles from './founder_card.module.scss';

const FounderCard = ({ img, name, link, role, org }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <Image src={img} title={name} width={258} height={254} alt={name} />
      </div>
      <div className={styles.name}>
        <a href={link} target={'_blank'}>
          {name}
        </a>
      </div>
      <div className={styles.role}>{role}</div>
      <div className={styles.org}>{org}</div>
    </div>
  );
};

export default FounderCard;
