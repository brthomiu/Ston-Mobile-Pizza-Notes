import LoginPage from "./pages/LoginPage";
import NewUser from "./pages/NewUser";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ResetPassword from "./pages/ResetPassword";
import HomePage from "./pages/HomePage";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./features/store";
import { Provider } from "react-redux";
import SelectDish from "./pages/SelectDish";
import Menu from "./components/Menu";
import { useEffect } from "react";
import { getUser } from "./features/getUser";

//Create Navigation Stack
const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App rendering.");

  useEffect(() => {
    getUser().then((user) => {
      if (user !== null && user !== undefined) {
        console.log("Found user: " + user + ", routing user to home page.");
        return user;
      }
      console.log("No user currently logged in, routing to login page");
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator
            initialRouteName="LoginPage"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="NewUser" component={NewUser} />
            <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="SelectDish" component={SelectDish} />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="Menu" component={Menu} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}
