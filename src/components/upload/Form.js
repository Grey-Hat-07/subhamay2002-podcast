import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import React from 'react';
import { useState } from 'react';
import { storage } from '../../firebase/main.firebase';


function Form(props) {
  const [music, setMusic] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
    const handleUpload = (e) => {
        e.preventDefault();
        if (!music) return;
        console.log({
          name,
          desc,
          music
        });
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
        <input type="text" value={name} onChange={
          (e) => {
            setName(e.target.value);
          }
        } placeholder='Podcast-name' className="form-control mb-3" />
        <div className="input-group mb-3">
          <input type="file" accept="audio/*" className="form-control" onChange={
            async (e) => {
              e.preventDefault();
                if (e.target.files[0]) {
                  setMusic(e.target.files[0]);
                }
              }
          } />
        </div>
        <textarea  placeholder='Description'  cols="100" rows="3" value={desc}
          onChange={
            (e) => {
              setDesc(e.target.value);
            }
          }
        ></textarea>
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
