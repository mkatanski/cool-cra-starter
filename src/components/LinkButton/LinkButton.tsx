import styled from "styled-components";

export type TabProps = {
  alignRight?: boolean;
};

export const LinkButton = styled.a<TabProps>`
  background: ${({ theme }) => theme.elements.button.background.default};
  color: ${({ theme }) => theme.elements.button.text.default};
  cursor: pointer;
  padding: 10px;

  display: inline-block;
  text-align: center;

  &:hover {
    background: ${({ theme }) => theme.elements.button.background.hover};
    color: ${({ theme }) => theme.elements.button.text.hover};
  }
`;
