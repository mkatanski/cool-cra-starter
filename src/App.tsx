import React from "react";
import { MainStyle } from "styles/global";
import { ThemeProvider } from "components/theme/ThemeProvider";
import { ThemedContainer } from "components/theme/ThemedContainer";
import { MainContainerTheme as LightTheme } from "styles/themes/light";
import { MainContainerTheme as DarkTheme } from "styles/themes/dark";
import { TopBar } from "components/TopBar";
import { LinkButton } from "components/LinkButton";

function App() {
  return (
    <ThemeProvider>
      <ThemedContainer themes={{ light: LightTheme, dark: DarkTheme }}>
        <MainStyle />
        <TopBar>
          <TopBar.Container>
            <LinkButton>Home</LinkButton>
          </TopBar.Container>
          <TopBar.Container>
            <LinkButton>Page 1</LinkButton>
          </TopBar.Container>
          <TopBar.Container>
            <LinkButton>Page 2</LinkButton>
          </TopBar.Container>
          <TopBar.Container alignRight>
            <LinkButton>Switch Theme</LinkButton>
          </TopBar.Container>
        </TopBar>
        <div className="App">
          <LinkButton>Login view</LinkButton>
        </div>
      </ThemedContainer>
    </ThemeProvider>
  );
}

export default App;
