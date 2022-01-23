import Signin from './component/Signin';
import Home from './component/Home'
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
