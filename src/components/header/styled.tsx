import styled from "styled-components/native";
import { ViewStyle, TextStyle } from "react-native";

const Title = styled.Text<{ style: TextStyle }>`
  letter-spacing: 16px;
  color: "hsl(236, 33%, 92%)";
  font-family: ${({ theme }) => theme.josefinSans_700};
  font-weight: 700;
  font-size: 32px;
`;

const Root = styled.View<{ style: ViewStyle }>`
  /* box model */
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 32px 0px;
  width: 100%;
`;

export { Root, Title };
