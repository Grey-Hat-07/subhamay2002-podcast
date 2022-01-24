import React,{useState} from 'react';
import '../App.css';
import {useCookies} from 'react-cookie';

export default function Signin(props) {
    let radius = {
        borderRadius: '10px'
    }
    const [sign, setSign] = useState('login');
    var Sign = () => {
        if(sign === 'login'){
        return (
            <form>
    
                <div className="d-flex align-items-center mb-3 pb-1">
                    <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-exam-high-school-flatart-icons-lineal-color-flatarticons.png" alt='logo' />
                    <h1>Login</h1>
                </div>
    
                <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>
    
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Email address' />
                    {/* <label className="form-label" for="form2Example17">Email address</label> */}
                </div>
    
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Password' />
                    {/* <label className="form-label" for="form2Example27">Password</label> */}
                </div>
                <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block App" type="button" onClick={(e)=> props.setstatus('login')}>Login</button>
                </div>
    
                <p className="mb-5 pb-lg-2">Don't have an account?<button className="btn btn-secondary" onClick={(e)=> setSign('signup')}>Sign up</button></p>
                
            </form>
        );}
        //signup
        else{
            return(
                <>
                <form>
                <div className="d-flex align-items-center mb-3 pb-1">
                    <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-exam-high-school-flatart-icons-lineal-color-flatarticons.png" alt='logo' />
                    <h1>Sign Up</h1>
                </div>
    
                <h5 className="fw-normal mb-3 pb-3" >Create your new account</h5>
    
                <div className="form-outline mb-3">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Email address' />
                    {/* <label className="form-label" for="form2Example17">Email address</label> */}
                </div>
    
                <div className="form-outline mb-3">
                    <input type="password" id="password" className="form-control form-control-lg" placeholder='Enter Password' />
                    {/* <label className="form-label" for="form2Example27">Password</label> */}
                </div>
                <div className="form-outline mb-3">
                    <input type="password" id="confirmpassword" className="form-control form-control-lg" placeholder='Confirm Password' />
                </div>
                <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block App" type="button" onClick={(e)=> props.setStatus('login')}>Signup</button>
                </div>

                <p className="mb-5 pb-lg-2">Already have account?<button className="btn btn-secondary" onClick={(e)=> setSign('login')}>login</button></p>
                
            </form>

                </>
            );}
        
    }
    return (
        <div className='vh-100 back'>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card cardback" style={radius} >
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?w=400&h=600&fit=crop"
                                        alt="login form"
                                        className="img-fluid" style={radius}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <Sign />
                                        
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
