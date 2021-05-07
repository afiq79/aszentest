import React from 'react';
import webimg from './img/pic.jpg';

import {NavLink} from 'react-router-dom'
import { BrandingWatermark } from '@material-ui/icons';
const Common = (props) => {


    return (
        <>

            <section id="header" className="main-section">
                
                    <div className="head_txt">
                        <h1>{props.txt} <strong className="brand">{props.brandtxt}</strong></h1>
                        <h4>We Are Team Of Building Future</h4>
                        <div className="btn">
                            <NavLink to={props.visit} className="main-btn"> {props.btntxt}</NavLink>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit maxime, nihil repellendus <br></br>magni nulla quae esse. Deserunt odio facere ipsum! Lorem ipsum dolor,<br></br> sit amet consectetur adipisicing elit. Natus, doloribus.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ea eaque nam mollitia<br></br> consequatur ex doloremque earum assumenda voluptas quasi?</p>
                    </div>
                    <div className="header_img">
                        <img src={props.imgsrc} className="main-img" alt="images" />
                    </div>

            </section>
        </>
    );
}

export default Common;