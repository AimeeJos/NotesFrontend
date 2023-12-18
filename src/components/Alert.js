import Alert from 'react-bootstrap/Alert';

const AlertMessage = ({type, msg}) => {
    

    return ( 
        <>
        {type === "updated" && <Alert key='secondary' variant='secondary'>{msg}</Alert> } 
        {type === "created" && <Alert key='primary' variant='primary'>{msg}</Alert> }      
        {type === "deleted" && <Alert key='danger' variant='danger'>{msg}</Alert> } 
        {type === "err" && <Alert key='danger' variant='danger'>{msg}</Alert> }    



            
    </>

     );
}
 
export default AlertMessage;