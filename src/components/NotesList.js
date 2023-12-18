import Note from "./Note";
import Table from 'react-bootstrap/Table';

const NotesList = ({notes, response_message}) => {
    return ( 
    <div className="notes-list">
            
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Created At</th>
          <th></th>

        </tr>
      </thead>
      <tbody>
      {notes.map( (note, i)=> (
            <Note id={note.id} title={note.title} body={note.body} date={note.created_at} key={note.id} i={i+1} response_message={response_message}/>
            ))}
      </tbody>
    </Table>
            
        </div>
     );
}
 
export default NotesList;