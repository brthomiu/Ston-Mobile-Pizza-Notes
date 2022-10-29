import AsyncStorage from "@react-native-async-storage/async-storage";

// Store username in async storage (temporary until rest of login is built)
export const storeUser = async (value) => {
  try {
    await AsyncStorage.setItem("username", value);
    console.log("User added to async storage: " + value);
  } catch (e) {
    // saving error
    console.log("There was an error storing the username");
  }
};
