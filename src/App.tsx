import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainStyle } from "styles/global";
import { ThemeProvider } from "components/theme/ThemeProvider";
import { ThemedContainer } from "components/theme/ThemedContainer";
import { MainContainerTheme as LightTheme } from "styles/themes/light";
import { MainContainerTheme as DarkTheme } from "styles/themes/dark";
import { LoadingScreen } from "components/fallbacks/LoadingScreen";
import Routes from "routes";

function App() {
  return (
    <ThemeProvider>
      <ThemedContainer themes={{ light: LightTheme, dark: DarkTheme }}>
        <div className="App">
          <MainStyle />
          <Router>
            <Suspense fallback={<LoadingScreen />}>
              <Routes />
            </Suspense>
          </Router>
        </div>
      </ThemedContainer>
    </ThemeProvider>
  );
}

export default App;
