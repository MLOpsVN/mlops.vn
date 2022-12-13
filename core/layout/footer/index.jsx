import styles from './footer.module.scss';
import Facebook from '@/assets/svgs/fb.svg';
import Discord from '@/assets/svgs/discord.svg';
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
          <Image src={Facebook} alt="facebook" />
        </Link>
        <Link href={'https://discord.gg/JNbQpba9Ae'} target={'_blank'}>
          <Image src={Discord} alt="discord" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
