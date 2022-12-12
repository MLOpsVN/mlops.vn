import { useState } from 'react';
import styles from './registration_form.module.scss';

const apiUrl = 'https://api.aihub.ml/v1/mcc/links';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [allowContact, setAllowContact] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onAccessCodeChange = (e) => {
    setCode(e.target.value);
  };

  const onAllowContactChange = (e) => {
    setAllowContact(!allowContact);

  }

  const onSubmit = () => {
    if (name === '') {
      alert('Name cannot be empty.');
      return;
    }
    if (email === '') {
      alert('Email cannot be empty.');
      return;
    }
    if (code === '') {
      alert('Access code cannot be empty.');
      return;
    }
    if (allowContact === false) {
      alert('You need to allow us to contact you in order to send the download link to your email.');
      return;
    }

    const body = JSON.stringify({name: name, email: email, code: code});
    fetch(apiUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: body,
    }).then((res) => {
      alert("Succeed! Please check your email.");
    }).catch((error) => {
      console.log(error);
      alert('Error! Please contact the organization.');
    });
  };

  return (
    <>
      <div className={styles.input}>
        <input placeholder="*Name" onChange={onNameChange} />
      </div>
      <div className={styles.input}>
        <input placeholder="*Email" onChange={onEmailChange} />
      </div>
      <div className={styles.input}>
        <input placeholder="*Access Code" onChange={onAccessCodeChange} />
      </div>
      <div className={styles.checkbox}>
        <label>
          <input type="checkbox" onChange={onAllowContactChange} />
          <i>Allow us to contact you via your email</i>
        </label>
      </div>
      <div className={styles.submit} onClick={onSubmit}>
        Register
      </div>
    </>
  );
};

export default RegistrationForm;
