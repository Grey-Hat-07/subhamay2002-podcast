import React from 'react';
import { useState } from 'react';
import { storage } from '../../firebase/main.firebase';


function Form() {
    const handleChange = e => {
        if (e.target.files[0]) {
          setMusic(e.target.files[0]);
          console.log(music);
        }
    };
    
    const handleUpload = () => {
        const uploadTask = storage.ref(`music/${music.name}`).put(music);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("music")
              .child(music.name)
              .getDownloadURL()
              .then(url => {
                console.log(url);
              });
          }
        );
    };
    
    const [music, setMusic] = useState(null);
  return (
  <div>
    <form>
        <input type="file" name="file" onChange={handleChange}/>
        <button type="submit" onClick={handleUpload}>Upload</button>
    </form>
  </div>
  );
}

export default Form;
