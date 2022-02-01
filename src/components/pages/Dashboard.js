import React from 'react';
import '../../App.css';
import Search from '../Search';
import Card from '../music/Card';


export default function Dashboard({music}) {
    return (
    <div className='container'><br /><br />
        <h1>Dashboard</h1>
        <div className="row">
            <div className="col-md-3">
                <Search />
            </div>
            <div className="col-md-9">
                {
                    music.map((data,index) => {
                        return < Card data={data} key={index} />
                    })
                }
            </div>
        </div>
    </div>
    )
}
