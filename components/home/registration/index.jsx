import RegistrationForm from '@/components/registration_form';
import TitleSection from '@/components/title_section';
import styles from './registration.module.scss';

const Registration = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.img}></div>
        <div>
          <div>
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
