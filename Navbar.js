import { NavLink } from 'react-router-dom';
import './Navbar.css';
export const Navbar = () =>{
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      /*background: isActive ? 'white' : 'black',*/
      color: isActive ? '' : 'white',
      textDecoration: 'none',
    };
  };
  return(
    <>
    <nav className="navbar">
      <img className='logo' alt="Airplanelogo" src="http://2.bp.blogspot.com/-pJ0nVJEyP00/UJhMpBvQzmI/AAAAAAABULA/wGveRCydbRo/s1600/Lufthansa_Logo21.png">
    </img>
    <NavLink to="/" style={NavLinkStyles}>Home</NavLink>
    <NavLink to="/about" style={NavLinkStyles}>About</NavLink>
    <NavLink to="/services" style={NavLinkStyles}>Services</NavLink>
     <NavLink to="/Book" style={NavLinkStyles}>Book</NavLink> 
     <NavLink to="/login" style={NavLinkStyles}>Login</NavLink> 
    </nav>
    </>
  );
};


