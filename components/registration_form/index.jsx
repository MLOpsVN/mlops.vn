import { useState } from 'react';
import styles from './registration_form.module.scss';

const RegistrationForm = () => {
  const [email, setEmail] = useState();
  const [code, setCode] = useState();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onAccessCodeChange = (e) => {
    setCode(e.target.value);
  };

  const onSubmit = () => {
    try {
      // API
    } catch {
    } finally {
    }
  };

  return (
    <>
      <div className={styles.input}>
        <input placeholder="*Email" onChange={onEmailChange} />
      </div>
      <div className={styles.input}>
        <input placeholder="*Access Code" onChange={onAccessCodeChange} />
      </div>
      <div className={styles.submit}>Register</div>
    </>
  );
};

export default RegistrationForm;
