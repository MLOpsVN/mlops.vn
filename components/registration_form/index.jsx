import { useState } from 'react';
import styles from './registration_form.module.scss';

const apiUrl = 'http://api.mlops.vn/v1/mcc/links';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onAccessCodeChange = (e) => {
    setCode(e.target.value);
  };

  const onSubmit = () => {
    if (email === '') {
      alert('Email cannot be empty');
      return;
    }
    if (code === '') {
      alert('Access code cannot be empty');
      return;
    }

    const payload = { email, code };
    const headers = {
      'Content-Type': 'application/json',
    };
    fetch(apiUrl, {
      headers,
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(console.log)
      .catch(console.error);
  };

  return (
    <>
      <div className={styles.input}>
        <input placeholder="*Email" onChange={onEmailChange} />
      </div>
      <div className={styles.input}>
        <input placeholder="*Access Code" onChange={onAccessCodeChange} />
      </div>
      <div className={styles.submit} onClick={onSubmit}>
        Register
      </div>
    </>
  );
};

export default RegistrationForm;
