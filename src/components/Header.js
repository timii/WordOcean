import "./Header.css";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <div className="header">
      <div className="header_text">Word Ocean</div>
      <DarkModeToggle className="header_toggle"/>
    </div>
  );
}

export default Header;
