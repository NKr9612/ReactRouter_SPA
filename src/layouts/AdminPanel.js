import {Route, Redirect} from 'react-router-dom';



const AdminPanel = () => {

    //symulacja logowania - zgody
    const permission = false;

    return ( 
        
    <Route  render ={() => (
        permission? (<div>Panel admina dostępny!</div> ) : (<Redirect to ='/login'/>)
    )}/>
    
    )
        
    
}
 
export default AdminPanel;