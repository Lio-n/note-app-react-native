import styled from "styled-components/native";
import { TouchableOpacity, ViewStyle } from "react-native";
import { CrossIcon, CheckIcon } from "../icons";
import { LinearGradient } from "expo-linear-gradient";

const BaseButton = styled.TouchableOpacity`
  border-radius: 50px;
  border: ${({ theme }) => theme.border_color};
  width: 30px;
  height: 30px;
`;

const MyButton = ({ onPress, style }: { onPress: () => unknown; style?: ViewStyle }) => (
  <BaseButton onPress={onPress} style={style} />
);

const CrossButton = ({ onPress }: { onPress: () => unknown }) => (
  <TouchableOpacity onPress={onPress}>
    <CrossIcon />
  </TouchableOpacity>
);

interface CheckButtonProps {
  onPress: () => unknown;
  style?: ViewStyle;
  isChecked: boolean;
}

const CheckButton = ({ onPress, style, isChecked }: CheckButtonProps) => {
  return (
    <BaseButton onPress={onPress} style={style}>
      {isChecked && (
        <LinearGradient
          // Background Linear Gradient
          colors={["hsl(192, 100%, 67%)", "hsl(280, 87%, 65%)"]}
          end={{ x: 1, y: 0.5 }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          start={{ x: 0.5, y: 0.13 }}
        >
          <CheckIcon />
        </LinearGradient>
      )}
    </BaseButton>
  );
};

export { MyButton, CrossButton, CheckButton };
