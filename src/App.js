import './App.css';
import { Default, NavBar } from './components';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Loading, Main } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently, user } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAccessTokenSilently().then(() => {
      if (isAuthenticated) {
        setLoading(false);
        console.log(user);
      }
    }).catch(e => {
      if (e.error === 'login_required') {
        loginWithRedirect();
      }
    })
  });

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
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/*' element={<Default/>} />
      </Routes>
    </div>
  );
}

export default App;
