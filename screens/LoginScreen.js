import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function LoginScreen() {
  const [isAuthenticating,setIsAuthenticating]=useState(false)
  async function loginHandler({email, password}){
    setIsAuthenticating(true)
    try{
      await login(email,password)
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
