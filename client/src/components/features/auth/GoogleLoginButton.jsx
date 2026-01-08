import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import useStore from '../../../store/useStore';
import { api } from '../../../services/api';

const GoogleLoginButton = ({ onError }) => {
  const navigate = useNavigate();
  const setAuth = useStore((s) => s.setAuth);

  return (
    <div className="w-full flex justify-center">
      <GoogleLogin
        theme="filled_black"
        size="large"
        shape="rectangular"
        text="continue_with"
        onSuccess={async (credentialResponse) => {
          try {
            const { data } = await api.googleAuth(credentialResponse.credential);
            localStorage.setItem('auth_token', data.token);
            setAuth(data.user, data.token);
            navigate('/');
          } catch (err) {
            onError?.(err?.response?.data?.message || 'Google auth failed.');
          }
        }}
        onError={() => onError?.('Google auth failed.')}
        useOneTap
      />
    </div>
  );
};

export default GoogleLoginButton;
