import {Route, Switch} from 'react-router-dom';

import HomePage from '../layouts/HomePage';
import Products from '../layouts/Products';
import Contact from '../layouts/Contact';
import AdminPanel from '../layouts/AdminPanel';

const Pages = () => {
    return ( 
        <Switch>
          <Route path= '/' exact component ={HomePage} ></Route>
          <Route path= '/products' exact component ={Products} ></Route>
          <Route path= '/contact' exact component ={Contact} ></Route>
          <Route path= '/admin' exact component ={AdminPanel} ></Route>
          <Route component ={HomePage} ></Route>
        </Switch>
     );
}
 
export default Pages;
