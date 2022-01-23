import Signin from './components/Signin';
import Home from './components/Home'
import './App.css';
import { useState } from 'react';

function App() {
  const [status, setstatus] = useState('logout')
  if (status === 'logout') {
    return (
      <div className="App">
        <Signin setstatus={setstatus} />
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
