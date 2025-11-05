// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '10px 0',
      textAlign: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Link to="/" style={{ color: 'white', margin: '0 16px', textDecoration: 'none', fontWeight: 600 }}>
        Home
      </Link>
      <Link to="/about" style={{ color: 'white', margin: '0 16px', textDecoration: 'none', fontWeight: 600 }}>
        About
      </Link>
      <Link to="/services" style={{ color: 'white', margin: '0 16px', textDecoration: 'none', fontWeight: 600 }}>
        Services
      </Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 16px', textDecoration: 'none', fontWeight: 600 }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
