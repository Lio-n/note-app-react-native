import { TouchableOpacity, TextStyle } from "react-native";
import styled from "styled-components/native";
import { Text } from "@app/ui";

const Body = styled(Text)<{ style: TextStyle }>`
  color: ${({ theme }) => theme.font_color_300};
  font-family: ${({ theme }) => theme.josefinSans_700};
  font-size: 18px;
  padding: 5px;
`;

interface BaseTouchableButtonProps {
  onPress: () => any;
  text: string;
  style?: TextStyle;
}

const TouchableButton = ({ onPress, text, style }: BaseTouchableButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <Body style={style}>{text}</Body>
  </TouchableOpacity>
);

export { TouchableButton };
