import RegistrationForm from '@/components/registration_form';
import TitleSection from '@/components/title_section';
import styles from './registration.module.scss';

const Registration = () => {
  return (
    <>
      <div className={styles.root} id="registration">
        <div className={styles.content_w}>
          <div className={styles.img}></div>
          <div className={styles.form}>
            <div>
              <TitleSection title={'Registration'} />
            </div>
            <div className={styles.content}>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
