import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating,setIsAuthenticating]=useState(false)
  async function loginHandler({email, password}){
    setIsAuthenticating(true)
    await login(email,password)
    setIsAuthenticating(false)
  }

  if(isAuthenticating) {
    return <LoadingOverlay message={'Login Success'}/>
  }


  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
