import "./Header.css";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <div className="header">
      <a href="https://github.com/timii/WordOcean" target="_blank" rel="noreferrer">
        <button className="header_github"></button>
      </a>
      <div className="header_text">Word Ocean</div>
      <DarkModeToggle />
    </div>
  );
}

export default Header;
