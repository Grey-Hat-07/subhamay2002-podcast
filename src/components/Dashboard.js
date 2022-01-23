import React from 'react';
import '../App.css'
import Search from './Search';
import Form from "./fill upload/Form";
export default function Dashboard() {
    const audio = require('../everything.mp3');
    const Sound = () => {
        return (
            <audio className='audio-player' controls>
                <source src={audio} type="audio/mpeg" />
            </audio>
        )
    }
    const image = {
        width: 100,
        height: 100,
        float: 'left'
    }
    return <div className='container'><br /><br />
        <h1>Dashboard</h1>
        <div className="row">
            <div className="col-md-3">
                <Search />
            </div>
            <div className="col-md-9">
            < Form/>
                <div className="card">
                    <div className="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWeon8rqu8w-5myvOF4BCM35ZJwjWKHYkEw&usqp=CAU"
                            alt="image" style={image} />
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">Publisher Name</p>
                        <p className="card-text p"><marquee> Description if Any</marquee></p>
                    </div>
                    <div className="card-header bg-secondary">
                        <Sound />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEBJ__qpuJnifH4sCoN-K6H97w6Q39JKEPQ&usqp=CAU"
                            alt="image" style={image} />
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">Publisher Name</p>
                        <p className="card-text p"><marquee> Description if Any</marquee></p>
                    </div>
                    <div className="card-header bg-secondary">
                        <Sound />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Eyw_8pj4dkLiQ6jV0i8ZEHts7tU6I6t8xQ&usqp=CAU"
                            alt="image" style={image} />
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">Publisher Name</p>
                        <p className="card-text p"><marquee> Description if Any</marquee></p>
                    </div>
                    <div className="card-header bg-secondary">
                        <Sound />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEBJ__qpuJnifH4sCoN-K6H97w6Q39JKEPQ&usqp=CAU"
                            alt="image" style={image} />
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">Publisher Name</p>
                        <p className="card-text p"><marquee> Description if Any</marquee></p>
                    </div>
                    <div className="card-header bg-secondary">
                        <Sound />
                    </div>
                </div>
            </div>
        </div>

    </div>;
}
