import React from 'react';

export default function Profilecard(props) {
    const image = {
        width: 260,
        height: 150,
        float: 'left'
    }
    var imgLink = `https://source.unsplash.com/random/?${props.data.title}`;
    return <div className='card col-md-3'>
        
            <img src={imgLink} className="card-img-top"
                alt="" style={image} />
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text text-muted">{props.data.publisher}</p>
                <p className="card-text">{props.data.description}</p>

            </div>

    </div>
}
