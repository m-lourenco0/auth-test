import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from './api';


function App() {

  const [message, setMessage] = useState("No message");
  const [protectedMsg, setProtectedMsg] = useState("No protected");

  const handleClick = () => {
    axios.post('/login', {
      login: 'admin',
      password: 'admin'
    }).then(res => {
      setMessage(res.data.message);
    });
  }

  const handleProtectedClick = () => {
    
    axios.get('/protected',
    { withCredentials: true })
      .then(res => {
      setProtectedMsg(res.data.message);
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className='button' onClick={handleClick}>Login</button>
        <button className='protected' onClick={handleProtectedClick}>Protected</button>
        <p className='text'>{message}</p>
        <p className='text'>Protected text: {protectedMsg}</p>
      </header>
    </div>
  );
}

export default App;
