import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import React from 'react';
import { useState } from 'react';
import { storage } from '../../firebase/main.firebase';


function Form(props) {
  const [music, setMusic] = useState(null);
    const handleChange = async (e) => {
      e.preventDefault();
        if (e.target.files[0]) {
          setMusic(e.target.files[0]);
          console.log(music);
        }
    };
    const validfile = new RegExp(/\.(mp3|wav|flac|m4a)$/i);
    const handleUpload = (e) => {
      e.preventDefault();
      if(!validfile.test(music.name)){
        alert('Please upload a valid audio file');
        return;
      }
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
    const style = {
      position: 'fixed',
      zIndex: '1001',
      opacity: '1.3'
    }
    if(props.add=== true){
  return (
  <div>
    <div style={style} className='container bg-white'>
      <form>
        <button className="btn btn-outline-danger closebtn" onClick={() => {props.setadd(false);}}>X</button>
        <h1 className='App'>Add podcasts</h1>
        <input type="text" placeholder='Podcast-name' className="form-control mb-3" />
        <div className="input-group mb-3">
          {/* <label class="input-group-text" for="inputGroupFile01">Upload</label> */}
          <input type="file" name="file" className="form-control" onChange={handleChange} />
        </div>
        <textarea name="" placeholder='Description' id="" cols="100" rows="3"></textarea>
        <div className='App'>
        <button className="btn btn-primary ms-1" type='reset'>Reset</button>
        <button className="btn btn-primary ms-1" onClick={handleUpload} type='submit'>Submit</button>
        </div>
      </form>
    </div>;
  </div>
  
  );}
  else{
    return<div></div>;
  }
}

export default Form;
