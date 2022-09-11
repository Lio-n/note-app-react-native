const initTheme: InitTheme = {
  active_text: "hsl(220, 98%, 61%)",
  font_size: "16px",
  font_family: "Josefin-Sans",
  josefinSans_400: "JosefinSans_400Regular",
  josefinSans_700: "JosefinSans_700Bold",
};

const lightTheme: CustomTheme = {
  ...initTheme,
  layout_color: "hsl(0, 0%, 98%)",
  backgroundColor: "hsl(236, 33%, 92%)",
  border_color: "hsl(233, 11%, 84%)",
  font_color_100: "hsl(235, 19%, 35%)", // Body
  font_color_200: "hsl(236, 33%, 92%)", // line-through
  font_color_300: "hsl(236, 9%, 61%)", // filter
};

const darkTheme: CustomTheme = {
  ...initTheme,
  layout_color: "hsl(235, 24%, 19%)",
  backgroundColor: "hsl(235, 21%, 11%)",
  border_color: "hsl(233, 14%, 35%)",
  font_color_100: "hsl(234, 39%, 85%)", // Body
  font_color_200: "hsl(237, 14%, 26%)", // line-through
  font_color_300: "hsl(234, 11%, 52%)", // filter
};

export { lightTheme, darkTheme };
