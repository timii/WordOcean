import "./Header.css";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <div className="header">
      <div className="header_text">Word Ocean</div>
      <div className="header_subtext">Lookup word definitions and additional infomation</div>
      <DarkModeToggle />
    </div>
  );
}

export default Header;
