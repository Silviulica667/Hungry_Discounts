import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [introduction, setIntroduction] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/data') 
    .then(response => {
      setData(response.data.message);
    })
  }, []);
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000') 
    .then(response => {
      setIntroduction(response.data.message);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <header className="App-title">
          <h1>Hungry Discounts</h1>
        </header> 
        <p>Data: {data ? data : "Loading..."}</p>
        <p>Message: {introduction ? introduction : "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
