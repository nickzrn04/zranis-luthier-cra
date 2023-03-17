import React from "react";
import Card from "../components/Card.js";
import Header from "../components/Header";
import data from "../data";

let cardNumber = 0;

export default function Collection(props) {
  const [categorie,setCategorie] = React.useState(props.type);
  const [cards,setCards] = React.useState([]);
  const [language, setLanguage] = React.useState(props.language);
  const [available, setAvailable] = React.useState(props.avail);
  React.useEffect(() => {
    cardNumber=0;
    let arr=data.map(item => {
      if((available && item.avail) || !available) {
        if(item.type == categorie) {
          cardNumber++;
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
    cardNumber=0;
    let arr=data.map(item => {
      if((available && item.avail) || !available) {
        if(item.type == categorie) {
          cardNumber++;
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
    cardNumber=0;
    let arr=data.map(item => {
      if((available && item.avail) || !available) {
        if(item.type == categorie) {
          cardNumber++;
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

  React.useEffect(() => {
    cardNumber=0;
    let arr=data.map(item => {
      if((available && item.avail) || !available) {
        if(item.type == categorie) {
          cardNumber++;
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
  },[language])

  function categorizeByUser(event) {
    setCategorie(event.target.value);
  }

  function empty() {
    if(cardNumber===0) return(
    <div className="empty" style={{marginTop:'330px', zIndex:'-1', position:'absolute',fontSize:'30px'}} >{props.language=='gr'?'Δεν υπάρχει ετοιμοπαράδωτο αυτής της κατηγορίας':'There are no available products of this category'}</div>)
    else return ""
  }


  return (
    <div className="collection">
      <div className="collection--hero" style={{display: "flex"}}>
        <div className="filters">
          <div className="price--info">{props.language==='gr'?'Η τελική τιμή αυξάνεται με την προσθήκη διακόσμησης που επιλέγετε. Επικοινωνήστε μαζί μας αν ενδιαφέρεστε για ένα προιόν.':'The total price increases if you whish to add decoration. Contact with us in case you are interested in one of our products.'} </div>
          <div className="filters--3" style={{flexDirection:'row'}}>
            <h4>{props.language==='gr'?'Ετοιμοπαράδωτα:':'Available:'}</h4>
            <input className="availInput" checked={available} onChange={()=>setAvailable(prevAvail => !prevAvail)} style={{ marginLeft:'7px'}} type={"checkbox"}></input>
          </div> 
          <div className="filters--3">
            <h4>{props.language==='gr'?'Ηχητικό υλικό:':'Listen to:'}</h4>
            <a target="_blank" href="https://www.youtube.com/@ZaranisPetros"><img src="../icons/youtube logo.jpg" alt="cant load"></img></a>
          </div> 
          <div className="categories">
            <u style={{textAlign: "center"}}>{props.language==='gr'?'Κατηγορίες':'Categories'}</u>
            <button onClick={categorizeByUser} value="Μπουζούκι">{props.language==='gr'?'Μπουζούκι':'Bouzouki'}</button>
            <button onClick={categorizeByUser} value="Κιθάρα">{props.language==='gr'?'Κιθάρα':'Guitar'}</button>
            <button onClick={categorizeByUser} value="Τζουράς">{props.language==='gr'?'Τζουράς':'Tzouras'}</button>
            <button onClick={categorizeByUser} value="Μπαγλαμάς">{props.language==='gr'?'Μπαγλαμάς':'Baglamas'}</button>
            <button onClick={categorizeByUser} value="Λαούτο">{props.language==='gr'?'Λαούτο':'Laouto'}</button>
            <button onClick={categorizeByUser} value="Μαντολίνο">{props.language==='gr'?'Μαντολίνο':'Mantolino'}</button>
            <button onClick={categorizeByUser} value="Νέι">{props.language==='gr'?'Νέι':'Nei'}</button>
          </div>
        </div>
        <div className="cardContainer">
          <h1 className="type-title" style={{marginTop:'160px',textAlign:'center'}}>{categorie}</h1>
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