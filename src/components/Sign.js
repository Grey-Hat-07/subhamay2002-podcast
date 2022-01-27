import React, { useState } from 'react';
import GoogleButton from 'react-google-button';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import '../App.css';
import Signlog from './Signlog';
import { fireAuth } from '../firebase/main.firebase';

// import {useCookies} from 'react-cookie';

export default function Sign(props) {
    const [sign, setSign] = useState('login');
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(fireAuth, provider)
        .then((user) => {
            console.log(user);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    return (
        <div className='vh-100 back'>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card cardback radii" >
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?w=400&h=600&fit=crop"
                                        alt="login form"
                                        className="img-fluid radii"
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <GoogleButton onClick={signInWithGoogle}/>
                                        <Signlog sign={sign} setSign={setSign} setstatus={props.setstatus} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
