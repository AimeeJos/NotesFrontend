import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NoteForm = (props) => {
    const [title, setTitle] = useState(props.title)
    const [body, setBody] = useState(props.body)
    
    const SubmitFormHandler = () => {
        props.action({"title":title, "body": body , "id":props.id})
    }

    const ChangeTitleHandler = (event) => {
        setTitle(event.target.value)       
    }
    const ChangeBodyHandler = (event) => {
        setBody(event.target.value)
    }


    return ( 
        <>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Note Title"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="note title" value={title} disabled={props.disabled} onChange={ChangeTitleHandler}/>
      </FloatingLabel>
   
      <FloatingLabel controlId="floatingTextarea2" label="Note Body" >
        <Form.Control
          as="textarea"
          placeholder="body"
          style={{ height: '100px' }}
          value={body}
          disabled={props.disabled}
          onChange={ChangeBodyHandler}
        />
      </FloatingLabel>
        <br></br>
        {props.operation === "Edit" && 
        <Button variant="primary" type='Submit' onClick={SubmitFormHandler}>
                Save Changes
        </Button>
        }
        {props.operation === "Add" && 
        <Button variant="primary" type='Submit' onClick={SubmitFormHandler}>
                Add New Note
        </Button>
        }
      
      </>
     );
}
 
export default NoteForm;