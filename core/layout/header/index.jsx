import Image from 'next/image';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}></div>
      <div className={styles.nav}>
        {menu?.map((item, index) => {
          return (
            <a href={item.path} key={index}>
              <div>{item.title}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const menu = [
  {
    title: 'About',
    path: '#vision',
  },
  {
    title: 'Activities',
    path: '#activities',
  },
  {
    title: 'Instructors',
    path: '#instructors',
  },
  {
    title: 'Registration',
    path: '#registration',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

export default Header;
