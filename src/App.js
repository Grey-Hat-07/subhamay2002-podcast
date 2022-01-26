import Sign from './components/Sign';
import Home from './components/Home'
import './App.css';
import { useState,useEffect } from 'react';


function App() {
  const [status, setstatus] = useState('logout');
  useEffect(() => {
    setstatus(JSON.parse(window.localStorage.getItem('status')));
  },[]);
  useEffect(() => {
    window.localStorage.setItem('status',JSON.stringify(status));
  });
  
  
  if (status === 'logout') {
    return (
      <div className="App">
        <Sign setstatus={setstatus} />
      </div>
    );
  }
  else {
    return (
      <div>
        <Home setstatus={setstatus} />
      </div>
    )
  }
}

export default App;
