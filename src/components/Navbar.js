import React from 'react'
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
export const Navbar = ({ setUser }) => {
    const style = {
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '1000',
    }
    const logout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("logout");
                setUser(false);
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div style={style}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Podcasts</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link">Aboutus</Link>
                            </li>
                        </ul>
                        <button className="btn btn-danger" onClick={logout}>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

