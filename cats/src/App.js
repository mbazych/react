import React from "react"
import ContactCard from "./Components/contactCard"

function App() {
  return (
    <div className="contacts">
      <ContactCard
          contact ={
            {
              photo: "http://placekitten.com/400/200",
              name: "Fluffy Dumper",
              number: "1461",
              email: "asioiwg23@dgadg"
            }
          }

      />
      <ContactCard
          contact ={
            {
              photo: "http://placekitten.com/400/200",
              name: "Fluffy Dumper",
              number: "1461",
              email: "asioiwg23@dgadg"
            }
          }
      />
        <ContactCard
            contact ={
              {
                photo: "http://placekitten.com/400/200",
                name: "Fluffy Dumper",
                number: "1461",
                email: "asioiwg23@dgadg"
              }
            }
      />
        <ContactCard
            contact ={
              {
                photo: "http://placekitten.com/400/200",
                name: "Fluffy Dumper",
                number: "1461",
                email: "asioiwg23@dgadg"
              }
            }
      />

    </div>


  )
}

export default App
