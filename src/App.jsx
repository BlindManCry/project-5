import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Globals";
import Todo from "./components/Todo";
import { useState } from "react";

const lightTheme = {
  bgColor: "#fff",
  inputColor: "#393A4B",
  textColor: "#494C6B",
  dekstopBgColor: "#FAFAFA",
  infoTxtColor: "#9495A5",
  infoHoverColor: "#494C6B",
  boxShadow: "0 35px 50px -15px rgba(194, 195, 214, 0.5)",
  nonActiveText: "#D1D2DA",
};

const darkTheme = {
  bgColor: "#25273D",
  inputColor: "#C8CBE7",
  textColor: "#C8CBE7",
  dekstopBgColor: "#171823",
  infoTxtColor: "#767992",
  infoHoverColor: "#E3E4F1",
  boxShadow: "0 35px 50px -15px rgba(0, 0, 0, 0.5);",
  nonActiveText: "#4D5067",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Todo setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      </ThemeProvider>
    </>
  );
}

export default App;
