import styled from "styled-components/native";
import { ViewStyle } from "react-native";
import { Layout, Body } from "@app/ui";

const Li = styled.View<{ style: ViewStyle }>`
  border-color: ${({ theme }) => theme.border_color};
`;

const NoTodoItem = () => {
  return (
    <Layout style={{ height: 200, alignItems: "center", justifyContent: "center" }}>
      <Body style={{ fontSize: 20 }}>No todo items left!</Body>
    </Layout>
  );
};

export { Li, NoTodoItem };
