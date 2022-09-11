import styled from "styled-components/native";
import { ViewStyle } from "react-native";

const Root = styled.View<{ style: ViewStyle }>`
  align-items: center;
  padding: 32px;
  height: 100%;
  width: 100%;
  background-color: ${(props: any) => props.theme.backgroundColor};
`;

export { Root };
