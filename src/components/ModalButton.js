import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NoteForm from './NoteForm';
import { POSTNEWNOTE, EDITNOTE, DELETENOTE } from './APIs/GETAPIS';
import axios from "axios";

const ModalButton = (props) => {
  const [data, setData] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const response_msg = (response, type) =>{
    
    if(type === 'err'){
      props.response_message({"msg": "An error occured, please try again", "type": "err"})
    }
    else{
      if(response.status === 200){
        props.response_message({"msg": "Note is updated", "type": "updated"})
      }
      if(response.status === 201){
        props.response_message({"msg": "New Note is created", "type": "created"})
      }
      if(response.status === 204){
        props.response_message({"msg": "A Note is deleted", "type": "deleted"})
      }
    }
    
  }


  const AddNewData = (data) => {      
    // console.log("---Add new data",data)
    setData(data)
    axios.post(POSTNEWNOTE, data).then(res =>(response_msg(res, 'res'))).catch(err => (response_msg(err, 'err')));
    handleClose()
  }
  const EditSave = (data) => {      
    // console.log("---edit new data",data, data.id)
    setData(data)
    axios.put(EDITNOTE + data.id + "/", data).then(res =>(response_msg(res, 'res'))).catch(err => (response_msg(err, 'err')));
    handleClose()
  }
  const DeleteNote = () => {      
    // console.log("---delete note",props.id)
    axios.delete(DELETENOTE + props.id + "/", data).then(res =>(response_msg(res, 'res'))).catch(err => (response_msg(err, 'err')));
    handleClose()
  }

  return ( 
      <>
      <Button variant={props.variant} onClick={handleShow}>
      {props.icon}
      </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      {props.operation === 'View' ? (
          <Modal.Title>{props.title}</Modal.Title>
          ): (<Modal.Title>{props.operation}  {props.title}</Modal.Title>)}
      </Modal.Header>

      {props.operation === 'Add' && (
          <Modal.Body>
              <NoteForm title='' body='' operation="Add" action={AddNewData}/>
          </Modal.Body>
          )}
      
      {props.operation === 'View' && (
          <Modal.Body>
              <NoteForm title={props.title} body={props.body} date={props.date} disabled="disabled"/>
          </Modal.Body>
          )}

      {props.operation === 'Edit' && (
          <Modal.Body>
              <NoteForm title={props.title} body={props.body} action={EditSave} operation="Edit" id={props.id}/>
          </Modal.Body>
          )}
      {props.operation === 'Delete' && (
          <Modal.Body>
              Are you sure you want to delete it?
          </Modal.Body>
          )}
          
      <Modal.Footer>
      
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {props.operation === 'Delete' && (
              <Button variant="danger" onClick={DeleteNote}>
              Delete
              </Button>
          )}
          
      </Modal.Footer>
    </Modal>

      </>
    );
}

export default ModalButton;