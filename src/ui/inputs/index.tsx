import styled from "styled-components/native";

const Input = styled.TextInput.attrs(() => ({ placeholderTextColor: "hsl(234, 11%, 52%)" }))`
  color: ${({ theme }) => theme.font_color_100};
  font-family: ${({ theme }) => theme.josefinSans_400};
  font-size: ${({ theme }) => theme.font_size};
  width: 100%;
`;

export { Input };
