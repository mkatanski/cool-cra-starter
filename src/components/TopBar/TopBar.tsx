import { ThemedContainer } from "components/theme/ThemedContainer";
import React from "react";
import styled from "styled-components";
import { TopBarContainerTheme as DarkTheme } from "styles/themes/dark";
import { TopBarContainerTheme as LightTheme } from "styles/themes/light";
import { Container } from "./Tab";

export type TopBarProps = React.PropsWithChildren<{}>;

const TopBarWrapper = styled.nav`
  height: 60px;
  background: ${({ theme }) => theme.elements.container.background};
  color: ${({ theme }) => theme.elements.container.text.primary};
  width: 100%;
  box-shadow: 0px 11px 10px -10px rgba(0, 0, 0, 0.58);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: space-between;
  align-items: flex-start;
`;

export const TopBar: React.FC<TopBarProps> & {
  Container: typeof Container;
} = ({ children }: TopBarProps) => (
  <ThemedContainer
    themes={{
      light: LightTheme,
      dark: DarkTheme,
    }}
  >
    <TopBarWrapper>{children}</TopBarWrapper>
  </ThemedContainer>
);

TopBar.Container = Container;
