import styled from "styled-components/native";
import { Text } from "@app/ui";

const BodyDeclaration = styled(Text)`
  color: ${({ theme }) => theme.font_color_200};
  text-decoration-line: line-through;
  width: 75%;
`;

export { BodyDeclaration };
