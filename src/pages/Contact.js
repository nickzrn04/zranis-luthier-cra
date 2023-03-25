import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import styled from "styled-components";
import "../pages/Contact.css"
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"

export default function Contact(props) {
  const { isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyAim571a6BKwaYekx51AAaIqaUz1WsLob4",
  });
  const center = React.useMemo(() => ({ lat: 37.908657, lng: 23.752010 }), []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y63w6bv', 'template_d8prx5p', form.current, 'iXebLFOTZER_FSDAe')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  if(!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <div className='contact--hero' style={{display: "flex"}}>
        <StyledContactForm>
          <form className='form' ref={form} onSubmit={sendEmail}>
            <label>{props.language=='gr'?'Όνομα':'Name'}</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_mail" />
            <label>{props.language=='gr'?'Μήνυμα':'Message'}</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>
        <div className='contact--info' style={{dipsplay: "flex", flexDirection: "column"}}>
          <strong style={{fontSize: "20px"}}>{props.language=='gr'?'Πέτρος Ζαράνης':' Petros Zaranis'}</strong>
          <p style={{marginBottom: "25px"}}>{props.language=='gr'?'Κύπρου 78, Αργυρούπολη 16452':'Kyprou 78, Argyroupoli 16452'}</p>
          <u>{props.language=='gr'?'Ώρες λειτουργίας':'Timetable'}</u>
          <p>&#x2022; {props.language=='gr'?'Δευτέρα-Σάββατο: 8:30 - 13:30 π.μ.':'Monday - Saturday: 8:30 - 13:30 pm'}</p>
          <p style={{marginBottom: "25px"}}>&#x2022; {props.language=='gr'?'Τρίτη,Πέμπτη,Παρασκευή: 17:00 - 19:00 μ.μ.':'Tuesday,Thursday,Friday: 17:00 - 19:00 pm'}</p>
          <u>{props.language=='gr'?'Επικοινωνία':'Contact'}</u>
          <p>&#x2022; {props.language=='gr'?'Τηλ: 210-9933092':'Phone: 210-9933092'}</p>
          <p>&#x2022; E-mail: zaranisluthier@gmail.com</p>
          <p>&#x2022; {props.language=='gr'?'Facebook: Πέτρος Ζαράνης':'Facebook: Petros Zaranis'}</p>
        </div>
        <GoogleMap zoom={16} center={center} mapContainerClassName="map--container">
          <Marker position={center}/>
        </GoogleMap>
      </div>
    </div>

  );
};

const StyledContactForm = styled.div`
  width: 360px;
  margin-top: 160px;
  margin-left: 50px;
  margin-right: 200px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;