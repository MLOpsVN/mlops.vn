import { useState } from 'react';
import styles from './registration_form.module.scss';

const apiUrl = 'https://api.aihub.ml/v1/mcc/links';

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
      alert('Email cannot be empty.');
      return;
    }
    if (code === '') {
      alert('Access code cannot be empty.');
      return;
    }

    const body = JSON.stringify({email: email, code: code});
    fetch(apiUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: body,
    }).then((res) => {
      console.log(res);
      alert("Succeed! Please check your email.");
    }).catch((error) => {
      console.log(error);
      alert('Error! Please contact the organization.');
    });
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
