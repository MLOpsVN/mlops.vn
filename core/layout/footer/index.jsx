import styles from './footer.module.scss';
import Facebook from '@/assets/svgs/fb.svg';
import Youtube from '@/assets/svgs/ytb.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}></div>
      <div className={styles.copy_right}>
        <div>Open Factor Foundation © Copyrighted 2022</div>
        <div>Open Factor is a social enterprise licensed by Hanoi Authority for Planning and Investment, Vietnam.</div>
      </div>
      <div className={styles.contact}>
        <Link href={'https://www.facebook.com/groups/mlopsvn'} target={'_blank'}>
          <Image src={Facebook} alt="fb" />
        </Link>
        <Link href={'https://www.youtube.com/channel/UCiWCOaOBnEhwes6b-pT3Odw'} target={'_blank'}>
          <Image src={Youtube} alt="ytb" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
