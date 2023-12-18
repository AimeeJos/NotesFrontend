import EDITICON from './ICONS/EditIcon'
import DELETEICON from './ICONS/DeleteIcon';
import VIEWICON from './ICONS/ViewIcon';
import {EDITBTNVARIANT, DELETEBTNVARIANT, VIEWBTNVARIANT} from "./CONSTANTS"
import ModalButton from './ModalButton';
import date_convertion from './HELPERS/dateconversions'


const Note = (props) => {
    const date = date_convertion(props.date)
    return ( 
        <> 
         <tr>
          <td>{props.i}</td>
          <td>{props.title}</td>
          <td>{date}</td>
          <td>
            <ModalButton
            icon={<VIEWICON/>}
            variant={VIEWBTNVARIANT}
            title={props.title}
            operation="View"
            body={props.body} 
            date={date}
            id={props.id}
            
            />
            <ModalButton 
            icon={<EDITICON/>} 
            variant={EDITBTNVARIANT} 
            title={props.title} 
            operation="Edit" 
            body={props.body} 
            date={date}
            id={props.id}
            response_message={props.response_message}

            />
            <ModalButton 
            icon={<DELETEICON/>} 
            variant={DELETEBTNVARIANT} 
            title={props.title} 
            operation="Delete" 
            date={date}
            id={props.id}
            response_message={props.response_message}
            />

            </td>
        </tr>       

    


        </>
     );
}
 
export default Note;