import { ThemeProvider } from "styled-components";
import { MyForm, Header, ListOfNotes, FilterTag, ActionsTag } from "@app/components";
import { useChangeTheme } from "@app/lib/hooks";
import { lightTheme, darkTheme } from "@app/assets/Themes";
import { Root } from "./styled";
import { BackgroundImage } from "@app/ui";
import { useState } from "react";

const HomeScreen = () => {
  const [theme, setTheme] = useChangeTheme();
  const [dataState, setDataState] = useState([]);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Root>
        <BackgroundImage bgImg={theme ? "dark" : "light"} />
        <Header />
        <MyForm />
        <ListOfNotes data={dataState} />

        <ActionsTag style={{ marginBottom: 20 }} lenghtOfList={dataState.length} />
        <FilterTag callback={setDataState} />
      </Root>
    </ThemeProvider>
  );
};

export { HomeScreen };
