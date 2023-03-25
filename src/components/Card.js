import React from "react";
import "./card-collection.css";

export default function Card(props) {
  const [image,setImage] = React.useState(0);
  function next() {
    if(image+1==props.pictures.length) {
      setImage(0);
    } else setImage(image+1)
  }
  function prev() {
    if(image==0) {
      setImage(props.pictures.length-1);
    } else setImage(image-1)
  }
  let gr = props.language==='gr';

  const figura = ()=><p>{gr?'Φιγούρα:':'Figure:'}<span style={{color: "brown"}}>{gr?props.φιγούρα:props.figure}</span></p>;
  const doyges = ()=><p>{gr?'Αριθμός δουγών:':'Srips:'}<span style={{color: "brown"}}>{gr?props.αριθμόςΔουγών:props.srips}</span></p>;
  const available = ()=><div className="availDiv">{gr?'Ετοιμοπαράδωτο':'Available'}</div>
  const allStats = ()=> {
    return (
      <div className="allStats" style={{display: "flex"}}>
        <div className="card--stats" style={{marginRight: "15px"}}>
          <p>{gr?'Κωδικός:':'Code:'} <span style={{color: "brown"}}>{props.id}</span></p>
          <p>{gr?'Διαστάσεις Οργάνου:':'Dimensions:'} <span style={{color: "brown"}}>{gr?props.διαστάσειςΟργάνου:props.dimensionsScale}</span></p>
          <p>{gr?'Διαστάσεις Ηχείου:':'Resonator dimensions:'} <span style={{color: "brown"}}>{gr?'Μήκος:':'Length'} = {props.διαστάσειςΗχείου.μήκος} / {gr?'Πλάτος:':'Width'} = {props.διαστάσειςΗχείου.πλάτος} / {gr?'Βάθος:':'Depth'} = {props.διαστάσειςΗχείου.βάθος}</span></p>
          <p>{gr?'Ξύλο Καπακιού:':'Soundboard wood:'} <span style={{color: "brown"}}>{gr?props.ξύλοΚαπακιού:props.woodSoundboard}</span></p>
          <p>{gr?'Ξύλο Σκάφους:':'Back and sides wood:'} <span style={{color: "brown"}}>{gr?props.ξύλοΣκάφους:props.woodBack}</span></p>
          <p>{gr?'Mάνικο:':'Neck:'} <span style={{color: "brown"}}>{gr?props.μάνικο:props.neck}</span></p>
        </div>
        <div className="card--stats">
          {props.αριθμόςΔουγών==="0"?"":doyges()}
          <p>{gr?'Ταστιέρα:':'Fretboard:'} <span style={{color: "brown"}}>{gr?props.ταστιέρα:props.fretboard}</span></p>
          <p>{gr?'Κλειδιά:':'Tuners:'} <span style={{color: "brown"}}>{props.κλειδιά}</span></p>
          {props.φιγούρα==="0"?"":figura()}
          <p>{gr?'Λούστρο:':'Varnish:'} <span style={{color: "brown"}}>{gr?props.λούστρο:props.vernice}</span></p>
          {props.avail===true?available():""}
        </div>
      </div>
    )
  }

  return (
    <div className="card">
    <div className="imgDiv">
    <img id="card--pictures" src={`../material/photos/${props.pictures[image]}`}/>
      <a className="zoom" target="_blank" href={`../material/photos/${props.pictures[image]}`}><button>&#128269;</button></a>
      <button onClick={next} className="nextR">&#x3e;</button>
      <button onClick={prev} className="nextL">&#x3c;</button>
    </div>
    <div className="card--info">
      <h1>{gr?props.τίτλος:props.title}</h1>
      {props.type!="Νέι"?allStats():""}
      <div className="card--price">
        <p>{gr?'Καθαρή τιμή:':'Net value:'} {props.τιμή}€</p>
        <p>{gr?'Τελική τιμή(+Φ.Π.Α 24%):':'Plus VAT(24%):'} {props.τιμή+(props.τιμή*24/100)}€</p>
      </div>
      <div className="description" style={{display: "flex", flexDirection: "column", alignItems: "center", overflowWrap: "break-word"}}>
        <h2 className="description-h"><p>Περιγραφή</p></h2>
        <p style={{margin: "none"}} className="card--description">{gr?props.περιγραφή:props.description}</p>
      </div>

    </div>
  </div>
  )

};

