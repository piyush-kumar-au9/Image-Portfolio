import React from 'react';
import './CardList.css';


const CardList = ({imageData}) => {
    const imageUrls = imageData.map(data => data.urls.regular)
    return(
        <div className="container pa5">
            {imageUrls.map((url, index) => {
                return(
                <div key={index} className="dim">
                    <img src = {url} alt=""/> 
                </div>
                );
                })
            }
        </div>
    );
}

export default CardList;