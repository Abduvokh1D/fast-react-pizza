import { Link } from "react-router-dom";
import Home from "./Home";
import SearchOrder from "../features/order/SearchOrder.jsx";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Hello Abduvokhid</p>
    </header>
  );
}

export default Header;
