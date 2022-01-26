import React,{useState} from 'react';
import {useCookies} from 'react-cookie';
export default function Signlog(props) {
    const [user, setuser] = useState({
        Email:'',
        Password:''
    });
    const [cookies, setCookie] = useCookies();
    const setusercookies = () => {
        setCookie('user', user, { path: '/' }, {expires: 0});
        props.setstatus('login');
    }
    //login
    if (props.sign === 'login') {
        return (
            <form>

                <div className="d-flex align-items-center mb-3 pb-1">
                    <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-exam-high-school-flatart-icons-lineal-color-flatarticons.png" alt='logo' />
                    <h1>Login</h1>
                </div>

                <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                <div className="form-outline mb-4">
                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" 
                    onChange={(e) => setuser({ ...user, Email: e.target.value })} />
                </div>

                <div className="form-outline mb-4">
                    <input type="password" className="form-control form-control-lg" placeholder='Password' 
                    onChange={(e) => setuser({ ...user, Password: e.target.value })} />
                    {/* <label className="form-label" for="form2Example27">Password</label> */}
                </div>
                <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block App" type="button" onClick={setusercookies}>Login</button>
                </div>

                <p className="mb-5 pb-lg-2">Don't have an account?<button className="btn btn-secondary" onClick={(e) => props.setSign('signup')}>Sign up</button></p>

            </form>
        );
    }
    //signup
    else {
        return (
            <>
                <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                        <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-exam-high-school-flatart-icons-lineal-color-flatarticons.png" alt='logo' />
                        <h1>Sign Up</h1>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3" >Create your new account</h5>

                    <div className="form-outline mb-3">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Email address' />
                    </div>

                    <div className="form-outline mb-3">
                        <input type="password" id="password" className="form-control form-control-lg" placeholder='Enter Password' />
                    </div>
                    <div className="form-outline mb-3">
                        <input type="password" id="confirmpassword" className="form-control form-control-lg" placeholder='Confirm Password' />
                    </div>
                    <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block App" type="button" onClick={(e) => props.setstatus('login')}>Signup</button>
                    </div>

                    <p className="mb-5 pb-lg-2">Already have account?<button className="btn btn-secondary" onClick={(e) => props.setSign('login')}>login</button></p>

                </form>

            </>
        );
    }

}


