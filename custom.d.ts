import { ViewStyle, TextStyle } from "react-native";

declare global {
  declare module "*.svg";

  type TextInputStyle = Omit<
    ViewStyle & TextStyle,
    | "borderLeftWidth"
    | "borderTopWidth"
    | "borderRightWidth"
    | "borderBottomWidth"
    | "borderTopLeftRadius"
    | "borderTopRightRadius"
    | "borderBottomRightRadius"
    | "borderBottomLeftRadius"
  >;

  interface PropChildren {
    children: React.ReactNode;
  }

  interface NoteData {
    key: number;
    text: string;
    isCompleted: boolean; // isCompleted ? isCompleted : isActive
  }

  interface InitTheme {
    active_text: string;
    font_size: string;
    font_family: string;
    josefinSans_400: string;
    josefinSans_700: string;
  }

  interface CustomTheme extends InitTheme {
    layout_color: string;
    backgroundColor: string;
    border_color: string;
    font_color_100: string;
    font_color_200: string;
    font_color_300: string;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme
}