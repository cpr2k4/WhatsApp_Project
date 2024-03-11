import Messenger from './components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/context/AccountProvider';
import './App.css'

function App() {
  const clientId = '707988118236-s8c4ftenrf1ild4qtdvjtucj037j1ojh.apps.googleusercontent.com';
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
        <Messenger />
      </AccountProvider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
