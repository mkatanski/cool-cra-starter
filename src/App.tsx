import React from "react";
import { MainStyle } from "styles/global";
import { ThemeProvider } from "components/theme/ThemeProvider";
import { ThemedContainer } from "components/theme/ThemedContainer";
import { MainContainerTheme as LightTheme } from "styles/themes/light";
import { MainContainerTheme as DarkTheme } from "styles/themes/dark";

function App() {
  return (
    <ThemeProvider>
      <ThemedContainer themes={{ light: LightTheme, dark: DarkTheme }}>
        <MainStyle />
        <div className="App">Test</div>
      </ThemedContainer>
    </ThemeProvider>
  );
}

export default App;
