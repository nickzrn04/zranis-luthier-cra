import React from "react";
import Card from "../components/Card.js";
import Header from "../components/Header";
import data from "../data";

export default function Collection(props) {
  const [categorie,setCategorie] = React.useState(props.type);
  const [cards,setCards] = React.useState([]);
  const [language, setLanguage] = React.useState(props.language);
  const [available, setAvailable] = React.useState(props.avail);
  React.useEffect(() => {
    let arr=data.map(item => {
      if((available && item.avail) || !available) {
        if(item.type == categorie) {
          return (
            <Card
              key = {item.id}
              {...item}
              language = {language}
            />
          )
        }
      }
    }) 
    setCards(arr); 
  },[])

  React.useEffect(() => {
    let arr=data.map(item => {
      if((available && item.avail) || !available) {
        if(item.type == categorie) {
          return (
            <Card
              key = {item.id}
              {...item}
              language = {language}
            />
          )
        }
      }
    }) 
    setCards(arr); 
  },[available])

  React.useEffect(() => {
    let arr=data.map(item => {
      if((available && item.avail) || !available) {
        if(item.type == categorie) {
          return (
            <Card
              key = {item.id}
              {...item}
              language = {language}
            />
          )
        }
      }
    }) 
    setCards(arr); 
  },[categorie])

  function categorizeByUser(event) {
    setCategorie(event.target.value);
  }

  const empty = ()=> <div style={{marginTop:'130px', zIndex:'-1', position:'absolute', left:'520px', fontSize:'30px'}} >{props.language=='gr'?'Δεν υπάρχει ετοιμοπαράδωτο αυτής της κατηγορίας':'There are no available products of this categorie'}</div>


  return (
    <div className="collection">
      <h1 style={{marginTop:'180px', marginLeft:'auto', marginRight:'auto', textAlign:'center'}}>{categorie}</h1>
      <div className="collection--hero" style={{display: "flex"}}>
        <div className="filters">
          <div className="price--info">{props.language=='gr'?'Η τελική τιμή αυξάνεται με την προσθήκη διακόσμησης που επιλέγετε. Επικοινωνήστε μαζί μας αν ενδιαφέρεστε για ένα προιόν.':'The total price increases if you whish to add decoration. Contact with us in case you are interested in one of our products.'} </div>
          <div className="filters--3" style={{flexDirection:'row'}}>
            <h4>{props.language=='gr'?'Ετοιμοπαράδωτα:':'Available:'}</h4>
            <input checked={available} onChange={()=>setAvailable(prevAvail => !prevAvail)} style={{width:'20px', marginLeft:'7px'}} type={"checkbox"}></input>
          </div> 
          <div className="filters--3">
            <h4>{props.language=='gr'?'Ηχητικό υλικό:':'Listen to:'}</h4>
            <a target="_blank" href="https://www.youtube.com/@ZaranisPetros"><img src="../icons/youtube logo.jpg"></img></a>
          </div> 
          <div className="categories">
            <u style={{textAlign: "center"}}>{props.language=='gr'?'Κατηγορίες':'Categories'}</u>
            <button onClick={categorizeByUser} value="Μπουζούκι">{props.language=='gr'?'Μπουζούκι':'Bouzouki'}</button>
            <button onClick={categorizeByUser} value="Κιθάρα">{props.language=='gr'?'Κιθάρα':'Guitar'}</button>
            <button onClick={categorizeByUser} value="Τζουράς">{props.language=='gr'?'Τζουράς':'Tzouras'}</button>
            <button onClick={categorizeByUser} value="Μπαγλαμάς">{props.language=='gr'?'Μπαγλαμάς':'Baglamas'}</button>
            <button onClick={categorizeByUser} value="Λαούτο">{props.language=='gr'?'Λαούτο':'Laouto'}</button>
            <button onClick={categorizeByUser} value="Μαντολίνο">{props.language=='gr'?'Μαντολίνο':'Mantolino'}</button>
            <button onClick={categorizeByUser} value="Νέι">{props.language=='gr'?'Νέι/μπασπαρέ':'Nei'}</button>
          </div>
        </div>
        <div className="cardContainer">
          {cards}
          {empty()}
        </div>
      </div>
    </div>

  )
  

  ///functions///


  function shortCardsArray() {
    let value=0;
    let currentCards = [];
    if(document.getElementById("shortPrice").value==="1") {
      setCards(prevCards => {
        prevCards.forEach(card => {
          if(card.props.τιμή>value) {
            currentCards = [card,...currentCards]
            value = card.props.τιμή;
          } else currentCards = [...currentCards,card]
        })
        return currentCards;
      })
    } else {
      setCards(prevCards => {
        prevCards.forEach(card => {
          if(card.props.τιμή>value) {
            currentCards = [...currentCards,card]
            value = card.props.τιμή;
          } else currentCards = [card,...currentCards]
        })
        return currentCards;
      })
    }
  }
}