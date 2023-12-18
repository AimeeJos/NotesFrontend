import React, {useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import Container from 'react-bootstrap/Container';
import { GETALLNOTES } from "./components/APIs/GETAPIS";
import axios from "axios";
import AlertMessage from "./components/Alert";
import Alert from 'react-bootstrap/Alert';


function App() {
  const [notes, setNotes] = useState([])
  const [msg, setMsg] = useState({})

  useEffect(()=>{
    console.log("---")

    axios.get(GETALLNOTES)
    .then(res => (
      setNotes(res.data)
        ))
    .catch(err => (
      setMsg({"msg": "Error in fetching data!", "type": "err"})
        ));

    return ()=>{
      setTimeout(function() {  
        setMsg({}) 
       }, 3000);
    }
}, [msg])


  const response_message = (message) => {
    setMsg(message)
  }


  return (
    <>
    <Header response_message={response_message} />
    <br></br>  
    <Container id="alert">      
      {msg.msg && <AlertMessage type={msg.type} msg={msg.msg}/>}      
    </Container>
    
    <Container>
      {notes.length > 0 && <NotesList notes={notes} response_message={response_message}/>}
      {notes.length === 0 && <Alert key='warning' variant='warning'>No Notes Available!</Alert>}
    </Container>
    </>
  );
}

export default App;
