import  React from "react";
import { Outlet, Link } from "react-router-dom";


export default function Header(props) {
  console.log(props.language);
  return (
    <header className="header">
      <div className="logo">
        <div style={{fontSize: "35px",fontWeight: "700"}}>Οργανοποιείο</div>
        <div style={{fontSize: "25px", fontWeight: "500", paddingLeft: "1px"}}>Πέτρος Ζαράνης</div>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
       <div className='menu-button'></div>
      </label>
      <ul className="menu">
        <li><Link to="/">{props.language==='gr'?'Αρχική':'Home'}</Link></li>
        <li><Link to="/categories">{props.language==='gr'?'Μουσικά όργανα':'Musical instruments'}</Link></li>
        <li><Link to="/someInfo">{props.language==='gr'?'Λίγα λόγια':'About'}</Link></li>
        <li><Link to="/contact">{props.language==='gr'?'Επικοινωνία':'Contact'}</Link></li>
      </ul>
      <div className="header--buttons" style={{display: "flex", marginRight: "30px"}}> 
        <button ><Link to="/">{props.language=='gr'?'Αρχική':'Home'}</Link></button>
        <button ><Link to="/categories">{props.language=='gr'?'Μουσικά όργανα':'Musical instruments'}</Link></button>
        <button ><Link to="/someInfo">{props.language=='gr'?'Λίγα λόγια':'About'}</Link></button>
        <button ><Link to="/contact">{props.language=='gr'?'Επικοινωνία':'Contact'}</Link></button>
        <button onClick={props.func('gr')}><img src="../icons/Flag-Greece.jpg"/></button>
        <button onClick={props.func('en')} style={{marginRight: "12px"}}><img src="../icons/english.webp"/></button>
        <Outlet />
      </div>

    </header>
  )
};