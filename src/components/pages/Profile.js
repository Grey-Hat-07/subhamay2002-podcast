import React,{useState} from 'react';
import Form from "../upload/Form";
import { useCookies } from 'react-cookie';
import '../../App.css';
import Profilecard from '../music/Profilecard';
export default function Profile() {
    // const [cookies, setCookie] = useCookies(['user']);

    var musicData = [
        {
            title: 'faded',
            description: 'nice song',
            publisher: 'alan walker'
        }, 
        {
            title: 'alone',
            description: 'nice song',
            publisher: 'alan walker'
        },
        {
            title: 'darkside',
            description: 'nice song ',
            publisher: 'alan walker'
        },
        {
            title: 'quintet',
            description: 'nice song',
            publisher: 'alan walker'
        },
        {
            title: 'the way you look at me',
            description: 'nice song',
            publisher: 'alan walker'
        }
    ]
    const [add, setadd] = useState(false);
    const addform=()=>{
        setadd(true);
    console.log(add);}
    return <div className='container'><br /><br />
        <h1>Profile</h1>
        <h5>Name:</h5>
        {/* <h5>Email: {cookies.user.Email}</h5> */}
        <Form setadd={setadd} add={add}/>
        <div className="row">
            <button className="btn btn-info" onClick={addform}>+Add </button>
        </div>
        <br/>
        <div className="row">
            
           { 
                musicData.map((data,index) => {
                    return < Profilecard data={data} key={index} />
                })
           }
            
            
            
        </div>
    </div>;
}
