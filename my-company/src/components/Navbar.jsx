import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
      <Link to="/services" style={{ margin: "0 1rem" }}>Services</Link>
      <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
