import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from '../Form/Form';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

interface Props {
  onLoginSuccess: () => void;
}

const Login: React.FC<Props> = props => {
  Login.defaultProps = {
    onLoginSuccess: () => {}
  };

  const [error, setError] = useState<string | null>(null);

  const history = useHistory();

  const { hasToken, setHasToken } = useContext(AuthContext);

  const onLoginSuccess = () => {
    setHasToken(TokenService.hasAuthToken());
    history.push('/');
  };

  const handleSubmitJwtAuth = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setError(null);
    const { user_name, password } = ev.currentTarget;
    localStorage.setItem('user_name', user_name.value);
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        console.log('postLogin response');
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        onLoginSuccess();
      })
      .catch(res => {
        setError(res.error);
      });
  };

  return (
    <div className="Login">
      <form className="Login_form" onSubmit={handleSubmitJwtAuth}>
        <legend className="Login_form_legend">Welcome!</legend>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="Login_user_name">
          <label htmlFor="LoginForm__user_name">User name</label>
          <Input required name="user_name" id="LoginForm__user_name"></Input>
        </div>
        <div className="Login_password">
          <label htmlFor="LoginForm__password">Password</label>
          <Input required name="password" type="password" id="LoginForm__password"></Input>
        </div>
        <button className="button emphasis_bg_color light_text_color bold" type="submit">
          Login
        </button>
      </form>

      <div className="left_container"></div>
      <div className="right_container"></div>
    </div>
  );
};

export default Login;
