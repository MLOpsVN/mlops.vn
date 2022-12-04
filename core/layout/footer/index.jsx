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
        <div>© 2020 - Bản quyền thuộc về ABC</div>
        <div>ABC là tổ chức được cấp giấy phép DEF, đăng ký tại XYZ</div>
      </div>
      <div className={styles.contact}>
        <Link href={'https://www.facebook.com/'} target={'_blank'}>
          <Image src={Youtube} alt="ytb" />
        </Link>
        <Link href={'https://www.facebook.com/'} target={'_blank'}>
          <Image src={Facebook} alt="fb" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
