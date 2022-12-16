import { useState } from 'react';
import styles from './registration_form.module.scss';
import LoadingSpinner from '@/components/spinner';

const apiUrl = 'https://api.aihub.ml/v1/mcc/links';

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
  };

  const onSubmit = async () => {
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

    const body = JSON.stringify({customer_name: name, email: email, code: code});

    setIsLoading(true);
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    })
    .then((response) => {
      setIsLoading(false);
      if (response.status === 201) {
        alert("Succeed! Please check your email.");
      }
      return response.json();
    })
    .then((data) => {
      if (data.error !== undefined && data.error.error !== undefined) {
        console.log(data);
        const err = data.error.error;
        alert(`Error! ${err}`);
      }
    })
    .catch((error) => {
      setIsLoading(false);
      console.log(error);
      alert('Error! Please contact the organization.');
    });
    setAllowContact(false);
  };

  const renderForm = (
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
        <label className={styles.container}>
          Allow us to contact you via your email
          <input type="checkbox" onChange={onAllowContactChange} />
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <div className={styles.submit} onClick={onSubmit}>
        Register
      </div>
    </>
  );

  return (
    <>
      {isLoading ? <LoadingSpinner /> : renderForm}
    </>
  );
};

export default RegistrationForm;
