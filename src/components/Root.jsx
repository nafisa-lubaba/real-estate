
import Footer from '../pages/Footer';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom'

const Root = () => {
    return (
        <div className='mx-auto'>
           
          <Navbar></Navbar>
        
        
           <Outlet></Outlet>

           <Footer></Footer>
        
           
         

            
            
        </div>
    );
};

export default Root;