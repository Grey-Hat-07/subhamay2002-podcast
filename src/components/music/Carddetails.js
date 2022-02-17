import React from 'react'
import './card.css'
import { useParams } from 'react-router-dom';
export default function Carddetails() {
    var { title, publish, desc } = useParams();
    var imgLink = `https://source.unsplash.com/random/?${title}`;
    return (
        <div className=' container '>
            <br /><br />
            Carddetails
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgLink} className="img-fluid rounded-start imgdetails mb-2" alt="img" />
                    </div>
                    <div className="col-md-6 ms-3">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{publish}</p>
                            <p className="card-text text-muted">{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
