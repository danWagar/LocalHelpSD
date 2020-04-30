import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from '../Form/Form';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import { AuthContext } from '../context/AuthContext';

interface Props {
  onLoginSuccess: () => void;
}

const Login: React.FC<Props> = props => {
  Login.defaultProps = {
    onLoginSuccess: () => {}
  };

  const [error, setError] = useState<string | null>(null);
  let history = useHistory();

  const { hasToken, setHasToken } = useContext(AuthContext);

  const onLoginSuccess = () => {
    console.log(hasToken);
    setHasToken(TokenService.hasAuthToken());
    console.log(hasToken);
    history.push('/dashboard');
  };

  const handleSubmitJwtAuth = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setError(null);
    const { user_name, password } = ev.currentTarget.value;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
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
    <form className="LoginForm" onSubmit={handleSubmitJwtAuth}>
      <div role="alert">{error && <p className="red">{error}</p>}</div>
      <div className="user_name">
        <label htmlFor="LoginForm__user_name">User name</label>
        <Input required name="user_name" id="LoginForm__user_name"></Input>
      </div>
      <div className="password">
        <label htmlFor="LoginForm__password">Password</label>
        <Input required name="password" type="password" id="LoginForm__password"></Input>
      </div>
      <button className="btn" type="submit">
        LOGIN
      </button>
    </form>
  );
};

export default Login;
