import './Homescreen.css';
import React from "react";
import Header from '../components/Header';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { Outlet, Link } from "react-router-dom";



function Homescreen(props) {

  return (
    <div className="Homescreen">
      <main>
        <section>
          <p>{props.language=='gr'?'Οργανοποιείο Πέτρος Ζαράνης':'Petros Zaranis musical instruments'}</p> 
          <h1>{props.language=='gr'?'Κιθάρες | Μπουζούκια | Παραδοσιακά και αρχαία μουσικά όργανα | Επισκευές':'Guitars | Bouzoukis | Greek traditional instruments | Repairing'}</h1>
          <img style={{width: "500px"}} src="../υλικο/Φωτογραφιες/guitar/μπαουρδου(μπροστα).jpg"/>
        </section>
        <div className="floor">
            <Link to='/categories'>
              <div>
                <u><p>{props.language=='gr'?'Κατόπιν παραγγελίας':'Custom-made'}</p></u>
                <button><img src="../υλικο/Φωτογραφιες/μπουζουκια/κουτσουρη μπροστα.jpg"/></button>               
              </div>
            </Link>
            <Link to='/categories2'>
              <div>
                <u><p>{props.language=='gr'?'Ετοιμοπαράδωτα':'Available'}</p></u>
                <button><img src="../υλικο/Φωτογραφιες/τζουρας/σκαφτος μπροστα.jpg"/></button>
              </div>
            </Link>
            <div>
              <u><p>{props.language=='gr'?'Επισκευές':'We repair'}</p></u>
              <button><img src="../υλικο/Φωτογραφιες/ανακατασκευες/μαντολινο(μετα).jpg"/></button>
            </div>
        </div>
        <div className='floor2' style={{justifyContent: "space-between", alignItems: "center"}}>
          <YoutubeEmbed embedId='lRvu2bJBflw'/>
          <p style={{fontWeight: "bold"}}>{props.language=='gr'?'Περισσότερα:':'More videos:'}</p>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <a href='https://www.youtube.com/@ZaranisPetros' target="_blank"><img style={{width: "200px", height: "100%", border: "solid 2px orange"}} src='./icons/youtube logo.jpg'></img></a>
            <a href='https://www.facebook.com/profile.php?id=100004094417639' target="_blank"><img style={{width: "200px", height: "100%", border: "solid 2px orange"}} src='./icons/fb.png'></img></a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homescreen;