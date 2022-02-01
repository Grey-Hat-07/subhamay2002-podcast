import React from 'react';
import './card.css';

function Card(props) {
    let data = props.data;
    const image = {
        width: 100,
        height: 100,
        float: 'left'
    };
    var imgLink = `https://source.unsplash.com/random/?${data.title}`;
    return (
        <div className="card">
            <div className="card-body">
                <img src={imgLink} style={image} alt="a" />
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.publisher}</p>
                <p className="card-text p">
                    <div className="bounce">
                        <p>
                            {data.description}
                        </p>
                    </div>
                </p>
            </div>
            <div className="card-header bg-secondary">
                {/* <Sound /> */}
            </div>
        </div>
    );
}

export default Card;
