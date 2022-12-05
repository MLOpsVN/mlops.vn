import TitleSection from '@/components/title_section';
import Link from 'next/link';
import styles from './contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.root} id="contact">
      <div className={styles.content_w}>
        <div>
          <div>
            <div>
              <TitleSection title={'Contact'} />
            </div>
            <div className={styles.content}>
              {contacts?.map((item, index) => {
                return (
                  <div key={index}>
                    {item.title}:
                    <Link href={item.link} key={index} target={'_blank'}>
                      {item.linkText}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.img}></div>
      </div>
    </div>
  );
};

const contacts = [
  {
    title: 'Email',
    link: 'mailto:mlopsvn@openfactor.com',
    linkText: 'mlopsvn@openfactor.com',
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/groups/mlopsvn',
    linkText: 'fb.com/groups/mlopsvn',
  },
];

export default Contact;
