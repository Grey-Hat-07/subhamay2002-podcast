import React,{useState} from 'react';
import '../../App.css';
import Search from '../Search';
import Form from "../upload/Form";
import Card from '../music/Card';


export default function Dashboard() {
    const [data, setdata] = useState({
        title: 'justin bieber',
        description: 'nice song',
        publisher: 'alan walker'
    });
    return <div className='container'><br /><br />
        <h1>Dashboard</h1>
        <div className="row">
            <div className="col-md-3">
                <Search />
            </div>
            <div className="col-md-9">
                < Form />
                < Card data={data} />
            </div>
        </div>
    </div>;
}
