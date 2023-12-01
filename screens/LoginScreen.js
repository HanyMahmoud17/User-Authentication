import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticating,setIsAuthenticating]=useState(false)
const authCTX=useContext(AuthContext);

  async function loginHandler({email, password}){
    setIsAuthenticating(true)
    try{
      const token=await login(email,password)
      authCTX.authenticate(token)
    } catch(error){
      Alert.alert('Authontication error','Please try again, with valid email and password')
    }
    setIsAuthenticating(false)
  }

  if(isAuthenticating) {
    return <LoadingOverlay message={'Login Success'}/>
  }


  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
