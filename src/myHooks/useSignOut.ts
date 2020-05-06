import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';
import TokenService from '../services/token-service';

export function useSignOut() {
  const { setHasToken } = useContext(AuthContext);
  const { setUserName, setUserId } = useContext(UserContext);
  const history = useHistory();

  return () => {
    TokenService.clearAuthToken();
    setHasToken(false);
    setUserName(null);
    setUserId(null);
    localStorage.removeItem('user_name');
    history.push('/');
  };
}
