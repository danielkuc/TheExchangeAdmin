// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

function App() {
  const { loginWithRedirect, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently().then(token => {
      console.log("logged in");
    }).catch(e => {
      if (e.error === 'login_required') {
        loginWithRedirect();
      }
    })
  })
  
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello from admin</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
