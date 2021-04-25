import "./DarkModeToggle.css";

const DarkModeToggle = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  // Use the localStorage object to store the value of the toggle in the browser
  // and check if a dark or light value is already set
  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    // Set default theme to light
    body.classList.add(lightTheme);
  }

  // Switch theme on button click   
  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkModeToggle"
      onClick={(e) => switchTheme(e)}
    ></button>
  );
};

export default DarkModeToggle;
