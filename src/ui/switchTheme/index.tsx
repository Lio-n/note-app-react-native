import { MoonIcon, SunIcon } from "../icons";
import { useChangeTheme } from "@app/lib/hooks";
import { TouchableOpacity } from "react-native";

const SwitchTheme = () => {
  const [theme, setTheme] = useChangeTheme();

  return (
    <TouchableOpacity onPress={() => setTheme(!theme)}>
      {theme ? <SunIcon /> : <MoonIcon />}
    </TouchableOpacity>
  );
};

export { SwitchTheme };
