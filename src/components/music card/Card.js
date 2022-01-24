import React from 'react';

function Card({ data }) {
    const image = {
        width: 100,
        height: 100,
        float: 'left'
    };
    let imgLink = `https://avatars.dicebear.com/api/micah/${data.title}.svg`
    return (
        <div className="card">
            <div className="card-body">
                <img src={imgLink} style={image} alt="a" />
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.publisher}</p>
                <p className="card-text p"><marquee> {data.description} </marquee></p>
            </div>
            <div className="card-header bg-secondary">
                {/* <Sound /> */}
            </div>
        </div>
    );
}

export default Card;
