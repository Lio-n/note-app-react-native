import styled from "styled-components/native";
import { TextStyle, TouchableOpacity } from "react-native";
import { Text, Layout } from "@app/ui";

const Root = styled(Layout)`
  justify-content: space-between;
  width: 100%;
`;

const Body = styled(Text)<{ style: TextStyle }>`
  color: ${({ theme }) => theme.font_color_300};
  padding: 5px;
`;

const ClearButton = ({ onPress }: { onPress: () => any }) => (
  <TouchableOpacity onPress={onPress}>
    <Body>Clear Completed</Body>
  </TouchableOpacity>
);

export { Root, ClearButton, Body };
