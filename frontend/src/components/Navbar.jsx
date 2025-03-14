import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>ProNote</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/notes"> Notes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
