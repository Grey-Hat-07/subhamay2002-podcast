import React from 'react';

export default function Search(props) {
    let ismobile = window.innerWidth < 768;
    const getSearchTerm=()=>{
        props.searchkeyword(props.inputEl.current.value);
    }

    return <div className='border border-secondary rounded'>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search"
            value={props.term} 
            ref={props.inputEl}
            onChange={getSearchTerm} />
            <button className="btn btn-info" type="button">search</button>
        </div>
        {
            ismobile ? null:<div className='mt-2'>
            <p className='text-muted'>Recommended List</p>
            <p>Test1</p>
            <p>Test2</p>
            <p>Test3</p>
            <p>Test4</p>
            </div>
        }
    </div>;
    
    
}
