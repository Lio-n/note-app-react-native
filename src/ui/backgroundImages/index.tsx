import { ImageBackground } from "react-native";

const lightImage = require("./bg-mobile-light.jpg");
const darkImage = require("./bg-mobile-dark.jpg");

const BackgroundImage = ({ bgImg }: { bgImg: "light" | "dark" }) => {
  const image = bgImg === "dark" ? darkImage : lightImage;

  return (
    <ImageBackground
      source={image}
      style={{ height: 280, position: "absolute", top: 0, right: 0, left: 0 }}
    />
  );
};

export { BackgroundImage };
