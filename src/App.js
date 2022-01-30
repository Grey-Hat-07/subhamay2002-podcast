import Sign from './components/Sign';
import Home from './components/Home'
import './App.css';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const auth = getAuth();
  const [user, setUser] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true)
    } else {
      setUser(false)
    }
  });
  if (user) {
    return <Home setUser={setUser} />
  } else {
    return <Sign setUser={setUser} />
  }
}

export default App;
