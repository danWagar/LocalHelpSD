import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { useForm } from 'react-hook-form';
import { loginFormDataType } from '../../types';
import { useGetUserLazyQuery } from '../../generated/graphql';
import './Login.css';

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const { setHasToken } = useContext(AuthContext);

  const { setUser } = useContext(UserContext);

  const history = useHistory();

  const [getUser, { called, loading, data }] = useGetUserLazyQuery();

  const { handleSubmit, register, errors } = useForm<loginFormDataType>();
  const onSubmit = (data: loginFormDataType) => {
    const { email, password } = data;

    setError(null);
    AuthApiService.postLogin({
      email: email,
      password: password,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        onLoginSuccess(email);
      })
      .catch((res) => {
        console.log(res.error);
        setError(res.error);
      });
  };

  const onLoginSuccess = (email: string) => {
    setHasToken(TokenService.hasAuthToken());
    getUser({ variables: { email: email } });
  };

  useEffect(() => {
    if (data?.user) {
      const user = {
        email: data?.user?.email!,
        firstName: data?.user?.first_name!,
        lastName: data.user.last_name!,
        id: data.user.id!,
      };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      history.push(`/lhsd/profile/${data.user.id}`);
    }
  }, [called, data]);

  return (
    <div className="Login">
      <form className="Login_form" onSubmit={handleSubmit(onSubmit)}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <label className="FindHelp_flex_label">
          email
          <input name="email" type="text" ref={register} required id="RegisterForm__email"></input>
        </label>
        <label className="FindHelp_flex_label">
          Password
          <input name="password" type="password" ref={register} required id="RegisterForm__password"></input>
        </label>
        <button className="rounded primary_bg_color light_text_color bold" type="submit">
          Login
        </button>
      </form>

      <div className="left_container"></div>
      <div className="right_container"></div>
    </div>
  );
};

export default Login;
