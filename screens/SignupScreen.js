import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';
function SignupScreen() {
const [isAuthenticating,setIsAuthenticating]=useState(false)
  async function signupHandler({email, password}){
    setIsAuthenticating(true)
    try{
      await createUser(email,password)
    } catch(error){
      Alert.alert('SingnUp Error','Enter a Valid email')
    }
    setIsAuthenticating(false)
  }

  if(isAuthenticating) {
    return <LoadingOverlay message={'Create User....'}/>
  }


  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
