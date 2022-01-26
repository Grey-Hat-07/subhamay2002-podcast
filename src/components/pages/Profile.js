import React,{useState} from 'react';
import Form from "../upload/Form";
import { useCookies } from 'react-cookie';
import '../../App.css';
export default function Profile() {

    const audio = require('../../everything.mp3');
    const Sound = () => {
        return (
            // <audio className='audio-player' controls>
            //     <source src={audio} type="audio/mpeg" />
            // </audio>
            <>
            hello
            </>
        )
    }
    const [cookies, setCookie] = useCookies(['user']);

    const image = {
        width: 140,
        height: 120,
        float: 'left'
    }
    const [add, setadd] = useState(false);
    const addform=()=>{
        setadd(true);
    console.log(add);}
    return <div className='container'><br /><br />
        <h1>Profile</h1>
        <h5>Name:</h5>
        <h5>Email: {cookies.user.Email}</h5>
        <Form setadd={setadd} add={add}/>
        <div className="row">
            <button className="btn btn-info" onClick={addform}>+Add </button>
        </div>
        <br/>
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
