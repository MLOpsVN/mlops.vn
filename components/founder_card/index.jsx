import Image from 'next/image';
import Link from 'next/link';
import styles from './founder_card.module.scss';

const FounderCard = ({ img, name, link, role, org }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <Image src={img} title={name} width={258} height={254} alt={name} />
      </div>
      <div className={styles.name}>
        <Link href={link} target={'_blank'}>
          {name}
        </Link>
      </div>
      <div className={styles.role}>{role}</div>
      <div className={styles.org}>{org}</div>
    </div>
  );
};

export default FounderCard;
