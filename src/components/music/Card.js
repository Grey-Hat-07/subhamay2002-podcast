import React,{ useEffect , useState } from 'react';

function Card({ data }) {
    const image = {
        width: 100,
        height: 100,
        float: 'left'
    };
    let imagedata;
    const [imageurl, setimageurl] = useState('');
    const fetchurl=async()=>{
        let url = `https://api.unsplash.com/search/photos?page=1&query=${data.title}&client_id=4IH6RS0Y3Rami1N2k39QVhU13jg3N69YBfJActXaGvM`;
        let response =await fetch(url);
        imagedata = await response.json();
        setimageurl(imagedata.results[0].urls.regular);
        //console.log(imagedata);

    }
    useEffect(()=>{
        fetchurl();
    },[])
    return (
        <div className="card">
            <div className="card-body">
                <img src={imageurl} style={image} alt='aa' />
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

