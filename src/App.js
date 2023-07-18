import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckPassword = () => {
    axios.post('http://localhost:5000/password', { password })
      .then((response) => {
        setResult(response.data.message);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
        setResult('An error occurred while processing the request.');
      });
      setPassword('')
  };
  

  return (
    <div className="App">
      <h1 style={{textTransform:'uppercase'}}>Password Strength Checker</h1>
      <div>
        <label htmlFor="password">Enter Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder='Enter Password here....'
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleCheckPassword}>Check Password</button>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default App;
