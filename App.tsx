import * as SplashScreen from "expo-splash-screen";
import { loadAsync } from "expo-font";
import { JosefinSans_400Regular, JosefinSans_700Bold } from "@expo-google-fonts/josefin-sans";
import { RecoilRoot } from "recoil";
import { HomeScreen } from "@app/screens";
import { useEffect, useCallback, useState, Suspense } from "react";
import { View, Text } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    try {
      // Pre-load fonts, make any API calls you need to do here
      await loadAsync({
        JosefinSans_400Regular,
        JosefinSans_700Bold,
      });
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      setAppIsReady(true);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <View>
          <Text>Loading</Text>
        </View>
      }
    >
      <RecoilRoot>
        <View onLayout={onLayoutRootView}>
          <HomeScreen />
        </View>
      </RecoilRoot>
    </Suspense>
  );
};

export default App;

// ! Important
/* 
Verificar bien las propiedades de CSS a usar.
En caso contrario el emulador de Expo go en android se deja de funcionar.
No se puede utilizar:
    - las unidades relativa. (rem, em, vh, etc...)
*/
