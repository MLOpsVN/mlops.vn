import { useState } from 'react';
import styles from './registration_form.module.scss';

const apiUrl = 'http://api.mlops.vn:8990/v1/mcc/links';

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onAccessCodeChange = (e) => {
    setCode(e.target.value);
  };

  const onSubmit = () => {
    try {
      if (email === "") {
        alert("Email cannot be empty");
        return;
      }
      if (code === "") {
        alert("Access code cannot be empty");
        return;
      }
      const payload = {'email': email, 'code': code};
      console.log(payload);
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
      <button className={styles.submit} onClick={onSubmit}>Register</button>
    </>
  );
};

export default RegistrationForm;
