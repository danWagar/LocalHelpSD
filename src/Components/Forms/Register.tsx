import React, { useState } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { useForm } from 'react-hook-form';
import { registerFormDataType } from '../../types';
import { Required } from '../Form/Form';

interface iRegisterProps {
  onSuccess: (id: number) => void;
  handleBackClick?: () => void;
}

const Register: React.FC<iRegisterProps> = (props) => {
  Register.defaultProps = {
    onSuccess: () => {},
  };

  const { onSuccess, handleBackClick } = props;

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
    <>
      <form id="RegisterForm" className="FindHelp_Register" onSubmit={handleSubmit(onSubmit)}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <label>
          email <Required />
        </label>
        <input name="email" type="text" ref={register} required id="RegisterForm__email"></input>

        <label>
          First Name <Required />{' '}
        </label>
        <input name="first_name" type="text" ref={register} required id="RegisterForm__first_name"></input>

        <label>
          Last Name <Required />
        </label>
        <input name="last_name" type="text" ref={register} required id="RegisterForm__last_name"></input>

        <label>
          Password <Required />
        </label>
        <input name="password" type="password" ref={register} required id="RegisterForm__password"></input>
      </form>
      <div className="FindHelp_form_nav">
        {handleBackClick && (
          <button className="grey_bg_color light_text_color bold" onClick={handleBackClick}>
            &lt; Back
          </button>
        )}
        <button className="primary_bg_color light_text_color bold" type="submit" form="RegisterForm">
          Register
        </button>
      </div>
    </>
  );
};

export default Register;
