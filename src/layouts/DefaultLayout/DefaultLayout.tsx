import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LayoutBase, { LayoutBaseProps } from "layouts/LayoutBase";
import { LinkButton } from "components/LinkButton";
import { TopBar } from "components/TopBar";
import { paths } from "config/paths";

const PageContent = styled.div`
  padding: 20px;
  height: 100%;
`;

const DefaultLayout: React.FC<LayoutBaseProps> = ({
  children,
  ...rest
}: LayoutBaseProps) => (
  <>
    <TopBar>
      <TopBar.Container>
        <Link to={paths.dashboard}>
          <LinkButton>Home</LinkButton>
        </Link>
      </TopBar.Container>
      <TopBar.Container>
        <Link to={paths.empty}>
          <LinkButton>Page 1</LinkButton>
        </Link>
      </TopBar.Container>
      <TopBar.Container>
        <Link to={paths.empty}>
          <LinkButton>Page 2</LinkButton>
        </Link>
      </TopBar.Container>
      <TopBar.Container alignRight>
        <LinkButton>Switch Theme</LinkButton>
      </TopBar.Container>
    </TopBar>
    <PageContent>
      <LayoutBase {...rest}>{children}</LayoutBase>
      <Link to={paths.login}>
        <LinkButton>Login view</LinkButton>
      </Link>
    </PageContent>
  </>
);

export default DefaultLayout;
