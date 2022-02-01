import Sign from './components/Sign';
import Home from './components/Home'
import './App.css';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from './firebase/main.firebase';
import { getDocs, collection } from '@firebase/firestore';


function App() {
  const getAllMusic = async () => {
    const querySnapshot = await getDocs(collection(db, 'music'));
    var musics = [];
    querySnapshot.forEach(doc => {
      musics.push(doc.data());
    });
    setMusic(musics);
  }
  const auth = getAuth();
  const [music, setMusic] = useState([]);
  const [user, setUser] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      getAllMusic();
      setUser(true)
    } else {
      setUser(false)
    }
  });
  if (user) {
    return <Home music={music} setUser={setUser} />
  } else {
    return <Sign setUser={setUser} />
  }
}

export default App;
