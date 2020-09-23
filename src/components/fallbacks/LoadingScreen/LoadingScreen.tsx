import React from "react";

import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  min-height: 100%;
  padding: 10px;
`;

export const LoadingScreen: React.FC = () => <Container>Loading...</Container>;
