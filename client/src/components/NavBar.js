import {NavLink} from 'react-router-dom'
import './NavBar.css'
const Nav = ()=> {

    return (
      
    <nav className="nav1">
        
        {/* <NavLink to="/Portfolio" style={{paddingRight: "15px",}}>Portfolio</NavLink> */}
        <NavLink to="/HomePage" style={{paddingRight: "15px",}}>Home</NavLink>
        <NavLink to="/loginPage" style={{paddingRight: "15px",}}>Sign up</NavLink>
        <NavLink to="/login" style={{paddingRight: "15px",}}>Login</NavLink>   
    </nav>
    
    );
  }
export default Nav;