import React from "react"

function ContactCard(props) {

    return(
        <div className="contact-card">
            <img alt="" src={props.contact.photo}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.number}</p>
            <p>Email: {props.contact.email}</p>
        </div>
   )
}

export default ContactCard

