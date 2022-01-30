import React from 'react';
import '../../App.css';
import Search from '../Search';
import Card from '../music/Card';


export default function Dashboard() {
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
            description: 'nice song',
            publisher: 'alan walker'
        }, 
        {
            title: 'the way you look at me',
            description: 'nice song',
            publisher: 'alan walker'
        }
    ]
    // const [data, setdata] = useState({
    //     title: 'justin bieber',
    //     description: 'nice song',
    //     publisher: 'alan walker'
    // });
    return <div className='container'><br /><br />
        <h1>Dashboard</h1>
        <div className="row">
            <div className="col-md-3">
                <Search />
            </div>
            <div className="col-md-9">
                {
                    musicData.map((data,index) => {
                        return < Card data={data} key={index} />
                    })
                }
            </div>
        </div>
    </div>;
}
