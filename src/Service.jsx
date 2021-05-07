import React from 'react';
import Card from './Card';
import Gfx from './img/pic2.jpg';
import Vd from './img/ed.jpg';
import Cm from './img/cm.jpg';
import Dm from './img/dm.jpg';
import Pg from './img/pg.jpg';
import Pp from './img/gf.jpg';
import Vfx from './img/vfx.jpg';
import Fl from './img/fl.jpg';
const Service = () => {


  return (
    <>

      <div className='my-5'> <h1 className="text-center" id="secHed"> Our Searvices </h1></div>
      <div className="main_Sec">
      <Card titel= "Programming" imgsrc={Pg} inroll= "Inroll The Program"/>
      <Card titel= "Digital Marketing" imgsrc={Dm} inroll= "Inroll The Program"/>
      <Card titel= "Power Point" imgsrc={Pp} inroll= "Inroll The Program"/>
      <Card titel= "Vfx Skills" imgsrc={Vfx} inroll= "Inroll The Program"/>
      <Card titel= "Video Editing Skills" imgsrc={Vd} inroll= "Inroll The Program"/>
      <Card titel= "Fl studio Skills" imgsrc={Fl} inroll= "Inroll The Program"/>
      <Card titel= "Communication Skills" imgsrc={Cm} inroll= "Inroll The Program"/>
      <Card titel= "Grafiucs Desing Skills" imgsrc={Gfx} inroll= "Inroll The Program"/>
    </div>
    </>
  );
}

export default Service;