import  React from "react";
import Header from "../components/Header";
import './Categories.css';
import { Outlet, Link } from "react-router-dom";



export default function Categories(props) {
  return (   
   <div>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "100px"}}>
      <h1 style={{marginTop: "140px", marginBottom: "50px"}}>{props.language==='gr'?'Κατηγορίες μουσικών οργάνων':'Categories'}</h1>
      <div style={{margin: "0"}} className="types">
        <Link to="/Μπουζουκι"><div value="Μπουζουκι" style={{display: "flex", flexDirection: "column"}}>
        <img src="../material/photos/bouzouki/kapet 1 (1).jpg" alt="cant load"/>
        <div className="category--title"><p>{props.language==='gr'?'Μπουζούκι':'Bouzouki'}</p></div>
        </div></Link>
        <Link to="/Κιθαρα">
          <div value="Κιθαρα" style={{display: "flex", flexDirection: "column"}}>
          <img src="../material/photos/guitar/rempeto 1.jpg" alt="cant load"/>
          <div className="category--title"><p>{props.language==='gr'?'Κιθάρα':'Guitar'}</p></div>
          </div>
        </Link>
        <Link to="/Τζουρας">
          <div value="Τζουρας" style={{display: "flex", flexDirection: "column"}}>
          <img src="../material/photos/tzouras/tzouras skaftos 3.jpg" alt="cant load"/>
          <div className="category--title"><p>{props.language==='gr'?'Τζουράς':'Tzouras'}</p></div>
          </div>
        </Link>
        <Link to="/Μπαγλαμας"> 
          <div value="Μπαγλαμας" style={{display: "flex", flexDirection: "column"}}>
          <img src="../material/photos/mpaglamas/mpaglamas 1.jpg" alt="cant load"/>
          <div className="category--title"><p>{props.language==='gr'?'Μπαγλαμάς':'Baglamas'}</p></div>
          </div> 
        </Link>
        <Link to="/Λαουτο">
          <div value="Λαουτο" style={{display: "flex", flexDirection: "column"}}>
            <img src="../material/photos/laouto/laouto front.jpg" alt="cant load"/>
            <div className="category--title"><p>{props.language==='gr'?'Λαούτο':'Laouto'}</p></div>
          </div>
        </Link>
        <Link to="/Μαντολινο">
          <div value="Μαντολινο" style={{display: "flex", flexDirection: "column"}}>
          <img src="../material/photos/mantolino/antoni (1).jpg" alt="cant load"/>
            <div className="category--title"><p>{props.language==='gr'?'Μαντολίνο':'Mantolino'}</p></div>
          </div>
        </Link>
        <Link to="/Νει">
          <div value="Νει" style={{display: "flex", flexDirection: "column"}}>
          <img src="../material/photos/nei/nei.jpg" alt="cant load"/>
          <div className="category--title"><p>{props.language==='gr'?'Νέι/μπασπαρέ':'Nei'}</p></div>
          </div>
        </Link>
        <Outlet />
      </div>
    </div>

   </div>
  )
}