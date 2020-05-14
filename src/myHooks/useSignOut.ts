import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';
import TokenService from '../services/token-service';

export function useSignOut() {
  const { setHasToken } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  return () => {
    TokenService.clearAuthToken();
    setHasToken(false);
    setUser({ id: -1, email: '', firstName: '', lastName: '' });
    localStorage.removeItem('user');
    history.push('/');
  };
}
