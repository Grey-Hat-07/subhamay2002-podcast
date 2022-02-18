import React, { useState, useRef } from 'react';
import '../../App.css';
import Search from '../Search';
import Card from '../music/Card';


export default function Dashboard({ music }) {
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const inputEl = useRef('');
    const searchHandler = (searchterm) => {
        setSearch(searchterm);
        if (searchterm !== "") {
            const newlist = music.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchterm.toLowerCase());
            });
            setSearchResult(newlist);
        }
        else{
            setSearchResult(music);
        }
    }
    return (
        <div className='container'><br /><br />
            <h1>Dashboard</h1>
            <div className="row">
                <div className="col-md-3">
                    <Search term={search} searchkeyword={searchHandler} inputEl={inputEl} />
                </div>
                <div className="col-md-9">
                    {   search.length<1 ?
                        music.map((data, index) => {
                            return < Card data={data} key={index} />
                        }):
                        searchResult.length>0 ?
                        searchResult.map((data, index) => {
                            return < Card data={data} key={index} />
                        }):
                        <h1>No Result Found</h1>
                    }
                </div>
            </div>
        </div>
    )
}
