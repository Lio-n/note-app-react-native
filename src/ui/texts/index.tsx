import styled from "styled-components/native";
import { TextStyle } from "react-native";

const Text = styled.Text<{ style: TextStyle }>`
  font-family: ${({ theme }) => theme.josefinSans_400};
  font-size: ${({ theme }) => theme.font_size};
`;

const Body = styled(Text)<{ style: TextStyle }>`
  color: ${({ theme }) => theme.font_color_100};
  width: 75%;
`;

export { Text, Body };
