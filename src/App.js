import Sign from './components/Sign';
import Home from './components/Home'
import './App.css';
import { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";


function App() {
  const [isUser, setUser] = useState(false);
  useEffect(() => {
  const auth = getAuth();
  const user = auth.currentUser; 
    console.log(isUser);
  if(user){
    setUser(true);
  }else{
    setUser(false);
  };
  }, [isUser]);
  
    if (isUser) {
      return (
        <div>
          <Home setUser={setUser} />
        </div>
      )
    } else {
      return (
        <div className="App">
          <Sign setUser={setUser} />
        </div>
      );
  }
  
  // const [status, setstatus] = useState('logout');
  // useEffect(() => {
  //   setstatus(JSON.parse(window.localStorage.getItem('status')));
  // }, []);
  // useEffect(() => {
  //   window.localStorage.setItem('status', JSON.stringify(status));
  // });


  // if (status === 'logout') {

  // }
  // else {

  // }
}

export default App;
