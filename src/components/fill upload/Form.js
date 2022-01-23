import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import React from 'react';
import { useState } from 'react';
import { storage } from '../../firebase/main.firebase';


function Form() {
  const [music, setMusic] = useState(null);
    const handleChange = async (e) => {
      e.preventDefault();
        if (e.target.files[0]) {
          setMusic(e.target.files[0]);
          console.log(music);
        }
    };
    
    const handleUpload = (e) => {
      e.preventDefault();
        if (!music) return;
        const storageRef = ref(storage, `music/${music.name}`);
        const uploadTask = uploadBytesResumable(storageRef, music);
        uploadTask.on(
          "state_changed", 
          snapshot =>{},
          err=>console.log(err),
          ()=>{
            getDownloadURL(uploadTask.snapshot.ref)
            .then(url => {
              console.log(url);
              setMusic(null);
            })
          }
          )
    };
    
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
