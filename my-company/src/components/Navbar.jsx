import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
};

const linkStyle = {
  color: '#fff',
  margin: '0 15px',
  textDecoration: 'none',
  fontSize: '16px'
};

export default Navbar;
