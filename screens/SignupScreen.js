import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';
function SignupScreen() {
const [isAuthenticating,setIsAuthenticating]=useState(false)
const authCTX=useContext(AuthContext);
  
async function signupHandler({email, password}){
    setIsAuthenticating(true)
    try{
    const token=await createUser(email,password)
      authCTX.authenticate(token)
    } catch(error){
      console.error("Authentication error:", error);
      Alert.alert('SingnUp Error','Enter a Valid email')
      setIsAuthenticating(false)
    }
  }

  if(isAuthenticating) {
    return <LoadingOverlay message={'Create User....'}/>
  }


  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
