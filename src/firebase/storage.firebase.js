import firebase from './main.firebase';
import 'firebase/storage';

const storage = firebase.storage();

const handleChange = e => {
    if (e.target.files[0]) {
      setMusic(e.target.files[0]);
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
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
};


export { handleChange, handleUpload};



