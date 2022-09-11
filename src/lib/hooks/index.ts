import { useRecoilState } from "recoil";
import { notesState, themeState } from "./atoms";

const useNotes = () => useRecoilState(notesState);
const useChangeTheme = () => useRecoilState(themeState);

export { useNotes, useChangeTheme };
