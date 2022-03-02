import logo from './logo.svg';
import './App.css';
import { NavBar } from './components';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated);
  console.log(user);
  
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
