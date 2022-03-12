import './App.css';
import { NavBar } from './components';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Loading } from './components';

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
      <Loading/>
    )
  }
  
  return (
    <div >
      <NavBar/>
      <header className="Main">
        <h1>Hello from admin</h1>
      </header>
    </div>
  );
}

export default App;
