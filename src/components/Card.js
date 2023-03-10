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

  const figura = ()=><p>{props.language==='gr'?'Φιγούρα:':'Figure:'}<span style={{color: "brown"}}>{props.φιγούρα}</span></p>;
  const doyges = ()=><p>{props.language==='gr'?'Αριθμός δουγών:':'Srips:'}<span style={{color: "brown"}}>{props.αριθμόςΔουγών}</span></p>;

  return (
    <div className="card">
    <div className="imgDiv">
      <img id="card--pictures" src={`../material/photos/${props.pictures[image]}`}/>
      <button onClick={next} className="nextR">&#x3e;</button>
      <button onClick={prev} className="nextL">&#x3c;</button>
    </div>
    <div className="card--info">
      <h1>{props.title}</h1>
      <div className="allStats" style={{display: "flex"}}>
        <div className="card--stats" style={{marginRight: "15px"}}>
          <p>{props.language==='gr'?'Κωδικός:':'Code:'} <span style={{color: "brown"}}>{props.id}</span></p>
          <p>{props.language==='gr'?'Διαστάσεις Οργάνου:':'Dimensions:'} <span style={{color: "brown"}}>{props.διαστάσειςΟργάνου}</span></p>
          <p>{props.language==='gr'?'Διαστάσεις Ηχείου:':'Resonator dimensions:'} <span style={{color: "brown"}}>{props.language==='gr'?'Μήκος:':'Length'} = {props.διαστάσειςΗχείου.μήκος} / {props.language==='gr'?'Πλάτος:':'Width'} = {props.διαστάσειςΗχείου.πλάτος} / {props.language==='gr'?'Βάθος:':'Depth'} = {props.διαστάσειςΗχείου.βάθος}</span></p>
          <p>{props.language==='gr'?'Ξύλο Καπακιού:':'Soundboard wood:'} <span style={{color: "brown"}}>{props.ξύλοΚαπακιού}</span></p>
          <p>{props.language==='gr'?'Ξύλο Σκάφους:':'Back and sides wood:'} <span style={{color: "brown"}}>{props.ξύλοΣκάφους}</span></p>
          <p>{props.language==='gr'?'Mάνικο:':'Neck:'} <span style={{color: "brown"}}>{props.μάνικο}</span></p>
        </div>
        <div className="card--stats">
          {props.αριθμόςΔουγών==="0"?"":doyges()}
          <p>{props.language==='gr'?'Ταστιέρα:':'Fretboard:'} <span style={{color: "brown"}}>{props.ταστιέρα}</span></p>
          <p>{props.language==='gr'?'Κλειδιά:':'Tuners:'} <span style={{color: "brown"}}>{props.κλειδιά}</span></p>
          {props.φιγούρα==="0"?"":figura()}
          <p>{props.language==='gr'?'Λούστρο:':'Varnish:'} <span style={{color: "brown"}}>{props.λούστρο}</span></p>
        </div>

      </div>
      <div className="card--price">
        <p>{props.language==='gr'?'Καθαρή τιμή:':'Net value:'} {props.τιμή}€</p>
        <p>{props.language==='gr'?'Τελική τιμή(+Φ.Π.Α 24%):':'Plus VAT(24%):'} {props.τιμή+(props.τιμή*24/100)}€</p>
      </div>
      <div className="description" style={{display: "flex", flexDirection: "column", alignItems: "center", overflowWrap: "break-word"}}>
        <h2 className="description-h"><p>Περιγραφή</p></h2>
        <p style={{margin: "none"}} className="card--description">{props.description}</p>
      </div>

    </div>
  </div>
  )

};