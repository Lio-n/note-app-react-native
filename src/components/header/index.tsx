import { SwitchTheme } from "@app/ui";
import { Root, Title } from "./styled";

const Header = () => {
  return (
    <Root>
      <Title>TODO</Title>
      <SwitchTheme />
    </Root>
  );
};

export { Header };
