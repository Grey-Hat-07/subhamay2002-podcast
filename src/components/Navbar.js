import React from 'react'

export const Navbar = (props) => {
    const List = () => {

        return (<ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" onClick={(e) => props.setPage('home')}>Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" onClick={(e) => props.setPage('profile')}>profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" onClick={(e) => props.setPage('aboutus')}>About Us</a>
            </li>
        </ul>
        );
    }
    const style={
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '1000',
    }

    return (
        <div style={style}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" onClick={(e) => props.setPage('home')}>Podcast</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <List />
                        <button className="btn btn-danger" onClick={(e) => { props.setstatus('logout');window.localStorage.setItem('Page', JSON.stringify('home'));}}>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

