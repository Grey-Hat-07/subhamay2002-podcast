import React from 'react';
import { Add } from './Add';
import '../App.css'
export default function Profile() {

    const audio = require('../everything.mp3');
    const Sound = () => {
        return (
            <audio className='audio-player' controls>
                <source src={audio} type="audio/mpeg" />
            </audio>
        )
    }
    const image = {
        width: 140,
        height: 120,
        float: 'left'
    }
    return <div className='container'><br /><br />
        <h1>Profile</h1>
        <h5>Name:</h5>
        <h5>Email:</h5>
        <div className="row">
            <button className="btn btn-info">+Add </button>
        </div>

        <div className="row">
            <div className="card col-md-3" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWeon8rqu8w-5myvOF4BCM35ZJwjWKHYkEw&usqp=CAU" className="card-img-top" 
                alt="image" style={image}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Sound/>
                </div>
            </div>
            <div className="card col-md-3" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWeon8rqu8w-5myvOF4BCM35ZJwjWKHYkEw&usqp=CAU" className="card-img-top" 
                alt="image" style={image}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Sound/>
                </div>
            </div>
            <div className="card col-md-3" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWeon8rqu8w-5myvOF4BCM35ZJwjWKHYkEw&usqp=CAU" className="card-img-top" 
                alt="image" style={image}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Sound/>
                </div>
            </div>
            <div className="card col-md-3" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWeon8rqu8w-5myvOF4BCM35ZJwjWKHYkEw&usqp=CAU" className="card-img-top" 
                alt="image" style={image}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Sound/>
                </div>
            </div>
            <div className="card col-md-3" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWeon8rqu8w-5myvOF4BCM35ZJwjWKHYkEw&usqp=CAU" className="card-img-top" 
                alt="image" style={image}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Sound/>
                </div>
            </div>
        </div>
    </div>;
}
