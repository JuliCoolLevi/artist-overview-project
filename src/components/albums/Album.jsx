import React, { useState }  from 'react';
import "./album.css";

import Menu from "./Menu";


const Album = () => {

    const [items, setItems] = useState(Menu);
   
    return (
        <section className='album'>

        <div className='album__heading'>
           <h1>Albums</h1>

           <span className='album__item'>ALBUMS</span>
           <span className='album__item'>SINGLES</span>
           

        </div>

        <div className='album__container'>
        {items.map((elem) => {
            const{ id, image, title, year, category } = elem;
            return (
                <>
                <div className='album__background'>
                <div className='album__card' key={id}>
                    <img src={image} />
                </div>

                <div key={id}>
                    <h3>{title}</h3>     

                    <h3>{year}</h3>

                    <h3>{category}</h3>
                </div>

                </div>
                </>
            )
        })}
        </div>

        </section>
    );
}

export default Album