import React from 'react';

export default function Search() {
    let ismobile = window.innerWidth < 768;
    if(!ismobile) {

    return <div className='border border-secondary rounded'>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-info" type="button">search</button>
        </div><div className='mt-2'>
        <p className='text-muted'>Recommended List</p>
        <p>Test1</p>
        <p>Test2</p>
        <p>Test3</p>
        <p>Test4</p>
        </div>
    </div>;}
    else{
        return<div> <div className='border border-secondary rounded'>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn btn-info" type="button">search</button>
        </div></div>
        </div>
    }
}
