import { atom } from "recoil";

const notesState = atom({
  key: "notes",
  default: [],
});

const themeState = atom({
  key: "themePalette",
  default: true, // true ? darkTheme : lightTheme
});

export { notesState, themeState };
