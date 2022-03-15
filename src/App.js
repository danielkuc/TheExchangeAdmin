import './App.css';
import { NavBar } from './components';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Loading, Main } from './components';

function App() {
  const { loginWithRedirect, getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAccessTokenSilently().then(token => {
      console.log("logged in");
      setLoading(false);
    }).catch(e => {
      if (e.error === 'login_required') {
        loginWithRedirect();
      }
    })
  })

  if (loading) {
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <Loading/>
      </div>
    )
  }
  
  return (
    <div className='vh-100'>
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
