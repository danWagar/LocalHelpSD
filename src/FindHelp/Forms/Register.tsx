import React, { useState } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Input, Required } from '../../Form/Form';

const handleSubmit = (ev: React.FormEvent) => {};

const onRegisterSuccess = () => {
  //history.push('/login');
};

const Register: React.FC = props => {
  Register.defaultProps = {
    onRegisterSuccess: () => {}
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(ev);
    console.log(ev.currentTarget.user_name);
    const { user_name, password } = ev.currentTarget;

    setError(null);
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        user_name.value = '';
        password.value = '';
        onRegisterSuccess();
      })
      .catch(res => {
        setError(res.error);
      });
  };

  return (
    <form className="RegisterForm" onSubmit={handleSubmit}>
      <div role="alert">{error && <p className="red">{error}</p>}</div>
      <label htmlFor="RegisterForm__user_name" className="FindHelp_flex_label">
        User name <Required />
        <Input name="user_name" type="text" required id="RegisterForm__user_name"></Input>
      </label>
      <label htmlFor="RegisterForm__password" className="FindHelp_flex_label">
        Password <Required />
        <Input name="password" type="password" required id="RegisterForm__password"></Input>
      </label>
      <button className="yellow_bg" type="submit">
        REGISTER
      </button>
    </form>
  );
};

export default Register;
