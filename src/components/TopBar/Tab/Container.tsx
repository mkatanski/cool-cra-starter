import styled from "styled-components";

export type TabProps = {
  alignRight?: boolean;
};

export const Container = styled.div<TabProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: space-between;
  align-items: flex-start;

  margin-left: ${(props) => (props.alignRight ? "auto" : "inherit")};
`;
