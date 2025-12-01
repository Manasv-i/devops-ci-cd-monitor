import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      padding: "15px",
      background: "#1e1e1e",
      color: "white",
      display: "flex",
      gap: "20px",
      fontSize: "18px"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Commits</Link>
      <Link to="/pulls" style={{ color: "white", textDecoration: "none" }}>Pull Requests</Link>
      <Link to="/issues" style={{ color: "white", textDecoration: "none" }}>Issues</Link>
      <Link to="/pipeline" style={{ color: "white", textDecoration: "none" }}>Pipeline</Link>
    </nav>
  );
}

export default Navbar;
