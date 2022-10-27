import Login from "./components/Login";
import NewUser from "./components/NewUser";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ResetPassword from "./components/ResetPassword";
import HomePage from "./components/HomePage";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./redux/store";
import { Provider } from "react-redux"
import SelectDish from "./components/create-recipe/SelectDish";
import Menu from "./components/Menu";

//Create Navigation Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
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
