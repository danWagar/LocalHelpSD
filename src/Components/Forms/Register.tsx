import React, { useState } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { useForm } from 'react-hook-form';
import { registerFormDataType } from '../../types';
import { Required } from '../Form/Form';

interface iRegisterProps {
  onSuccess: (id: number) => void;
}

const Register: React.FC<iRegisterProps> = (props) => {
  Register.defaultProps = {
    onSuccess: () => {},
  };

  const { onSuccess } = props;

  const [error, setError] = useState<string | null>(null);

  const { handleSubmit, register, errors } = useForm<registerFormDataType>();
  const onSubmit = (data: registerFormDataType) => {
    const { email, first_name, last_name, password } = data;

    setError(null);
    AuthApiService.postUser({
      email: email,
      first_name: first_name,
      last_name: last_name,
      password: password,
    })
      .then((user) => {
        onSuccess(user.id);
      })
      .catch((res) => {
        setError(res.error);
      });
  };

  return (
    <form className="RegisterForm" onSubmit={handleSubmit(onSubmit)}>
      <div role="alert">{error && <p className="red">{error}</p>}</div>
      <label className="FindHelp_flex_label">
        email <Required />
        <input name="email" type="text" ref={register} required id="RegisterForm__email"></input>
      </label>
      <label className="FindHelp_flex_label">
        First Name <Required />
        <input name="first_name" type="text" ref={register} required id="RegisterForm__first_name"></input>
      </label>
      <label className="FindHelp_flex_label">
        Last Name <Required />
        <input name="last_name" type="text" ref={register} required id="RegisterForm__last_name"></input>
      </label>
      <label className="FindHelp_flex_label">
        Password <Required />
        <input name="password" type="password" ref={register} required id="RegisterForm__password"></input>
      </label>
      <button className="yellow_bg" type="submit">
        REGISTER
      </button>
    </form>
  );
};

export default Register;
