import { atom, AtomEffect, DefaultValue } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistAtom = (key: string): AtomEffect<[]> => {
  return ({ setSelf, onSet }) => {
    setSelf(
      AsyncStorage.getItem(key).then(
        (savedValue) => (savedValue != null ? JSON.parse(savedValue) : new DefaultValue()) // Abort initialization if no value was stored
      )
    );

    // Subscribe to state changes and persist them to localForage
    onSet((newValue, _, isReset) => {
      isReset ? AsyncStorage.removeItem(key) : AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  };
};

const notesState = atom({
  key: "notes",
  default: [],
  effects_UNSTABLE: [persistAtom("@notes_localdata")],
});

const themeState = atom({
  key: "themePalette",
  default: true, // true ? darkTheme : lightTheme
});

export { notesState, themeState };
