import { NavigationContainer } from "@react-navigation/native";
import { I18nextProvider } from "react-i18next";
import {
  StatusBar,
  useColorScheme
} from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import MainNavigator from "./src/Navigation/MainNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import i18n from "./src/i18n/i18n";
import { useRef } from "react";
import store from "./src/Redux/Store";


const App = () => {
  const colorScheme: any = useColorScheme();
  const navigationRef: any = useRef<any>(null);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <StatusBar
        hidden={false}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer
            ref={navigationRef}
          >
            <MainNavigator />
          </NavigationContainer>
        </I18nextProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

