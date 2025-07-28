import { Link } from "react-router-dom";
import Home from "./Home";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <p>Hello Abduvokhid</p>
    </header>
  );
}

export default Header;
