import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
                            <div class="card">
                                <img src={props.imgsrc} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{props.titel}</h5>
                                    <p class="card-text">Some quick example text to of the card's content.</p>
                                    <NavLink to="/contact" class="btn btn-primary">{props.inroll}</NavLink>
                                </div>
                            </div>
                    
        </>
    )
};

export default Card;