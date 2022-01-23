import React from 'react';
import  avatarGen  from "js-avatar-generator"

function Card(props) {
    var { data } = props;
    const image = {
        width: 100,
        height: 100,
        float: 'left'
    }
    const imgSrc = avatarGen({
        name: data.title,
        backgroundColor: "#1ed3qs",
        fontColor : "#FFF",
        size: "300"
    })
    return (
        <div className="card">
            <div className="card-body">
                <img src={imgSrc} style={image} alt="a" />
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
