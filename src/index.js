import React, { useEffect, useMemo, useState } from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Homescreen from './pages/Homescreen';
import Categories from './pages/Categories'
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import InfoPage from './pages/InfoPage';
import { Outlet, Link } from "react-router-dom";

let globalLanguage = 'gr';


function App() {
  const [language, setLanguage] = useState(useMemo(()=>globalLanguage));
  function changeLanguage(lang) {
    globalLanguage = lang;
    setLanguage(lang);
  }
  return(
    <>
    <BrowserRouter>
    <header className="header">
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className="logo">
          <div className='logo--main'>Οργανοποιείο</div>
          <div className='logo--name'>Πέτρος Ζαράνης</div>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
        </label>
        <ul className="menu">
          <li><Link to="/">{language==='gr'?'Αρχική':'Home'}</Link></li>
          <li><Link to="/categories">{language==='gr'?'Μουσικά όργανα':'Musical instruments'}</Link></li>
          <li><Link to="/someInfo">{language==='gr'?'Λίγα λόγια':'About'}</Link></li>
          <li><Link to="/contact">{language==='gr'?'Επικοινωνία':'Contact'}</Link></li>
        </ul>
      </div>
      <div className='headerButtons' style={{display: "flex", marginRight: "30px"}}> 
        <button className="header--buttons"><Link to="/">{language==='gr'?'Αρχική':'Home'}</Link></button>
        <button className="header--buttons"><Link to="/categories">{language==='gr'?'Μουσικά όργανα':'Musical instruments'}</Link></button>
        <button className="header--buttons"><Link to="/someInfo">{language==='gr'?'Λίγα λόγια':'About'}</Link></button>
        <button className="header--buttons"><Link to="/contact">{language==='gr'?'Επικοινωνία':'Contact'}</Link></button>
        <button className='langBtn' onClick={()=>changeLanguage('gr')}><img src="../icons/Flag-Greece.jpg" alt='gr'/></button>
        <button className='langBtn' onClick={()=>changeLanguage('en')} style={{marginRight: "12px"}}><img src="../icons/english.webp" alt='en'/></button>
        <Outlet />
      </div>
      </header>
      <Routes>
        <Route>
          <Route index element={<Homescreen language={language}/>}/>
          <Route path='categories' element={<Categories language={language}/>}/>
          <Route path='someInfo' element={<InfoPage language={language}/>}/>
          <Route path='contact' element={<Contact language={language}/>}/>
          <Route path='Μπουζούκι' element={<Collection language={language} avail={false} type="Μπουζούκι"/>}/>
          <Route path='Λαούτο' element={<Collection language={language} avail={false}  type="Λαούτο"/>}/>
          <Route path='Μπαγλαμάς' element={<Collection language={language} avail={false}  type="Μπαγλαμάς"/>}/>
          <Route path='Τζουράς' element={<Collection language={language} avail={false}  type="Τζουράς"/>}/>
          <Route path='Αρχαία' element={<Collection language={language} avail={false}  type="Αρχαια"/>}/>
          <Route path='Μαντολίνο' element={<Collection language={language} avail={false}  type="Μαντολίνο"/>}/>
          <Route path='Κιθάρα' element={<Collection language={language} avail={false}  type="Κιθάρα"/>}/>
          <Route path='Νέι' element={<Collection language={language} avail={false}  type="Νέι"/>}/>
          <Route path='categories2' element={<Collection language={language} avail={true} type="Μπουζούκι"/>}/>
          <Route path='*' element={<Homescreen language={language}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>

  );
};


const root = document.getElementById("root");
const container = createRoot(root);
container.render(<App/>);


