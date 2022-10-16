import Login from "./components/Login";
import Header from "./components/Header";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}
