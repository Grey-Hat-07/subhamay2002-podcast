import React from 'react';
import '../../App.css';
import Search from '../Search';
import Form from "../fill upload/Form";
import Card from '../music card/Card';


export default function Dashboard() {
    var propData = {
        "title": "on my way",
        "publisher": "alan walker",
        "description": "nice song",
    }
    return <div className='container'><br /><br />
        <h1>Dashboard</h1>
        <div className="row">
            <div className="col-md-3">
                <Search />
            </div>
            <div className="col-md-9">
                < Form />
                < Card data={propData} />
            </div>
        </div>
    </div>;
}
