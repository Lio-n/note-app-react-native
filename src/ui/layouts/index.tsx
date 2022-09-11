import styled from "styled-components/native";
import { ViewStyle } from "react-native";

const Layout = styled.View<{ style: ViewStyle }>`
  /* box model */
  flex-direction: row;
  padding: 20px 32px;
  max-width: 450px;
  width: 100%;
  /* visual */
  border-radius: 10px;
  background-color: ${({ theme }) => theme.layout_color};
`;

export { Layout };
