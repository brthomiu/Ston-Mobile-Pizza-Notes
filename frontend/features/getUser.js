import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

// Get username from local async storage - My original code
export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem("username");
    if (value !== null) {
      //value previously stored
      console.log("Value being returned from getUser function: " + value);
      return value;
    }
  } catch (error) {
    //error reading value
    console.log("Could not get user");
  }
};

export const useAsyncStorage = (key, initialValue) => {
  const [storageItem, setStorageItem] = useState(initialValue);

  // Get username from local async storage - My original code
  // const getUser = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("username");
  //     if (value !== null) {
  //       //value previously stored
  //       console.log("Value being returned from getUser function: " + value);
  //       return value;
  //     }
  //   } catch (error) {
  //     //error reading value
  //     console.log("Could not get user");
  //   }
  // };

  // Get username with useEffect - Refactored with my code
  useEffect(() => {
    AsyncStorage.getItem("username").then((value) => {
      if (value !== null) {
        try {
          const value = AsyncStorage.getItem("username");
          return value;
        } catch (e) {
          console.log("Could not get user");
        }
      }
    });
  }, []);

  // Get username with useEffect - example of useEffect with AsyncStorage that I found to compare/analyze
  // useEffect(() => {
  //     AsyncStorage.getItem("username")
  //       .then((value) => {
  //         if (value !== null) {
  //           try {
  //             const parsed = JSON.parse(value)
  //             setStorageItem(parsed)
  //             return parsed
  //           } catch (e) {
  //             setStorageItem(value)
  //             return value
  //           }
  //         } else {
  //           return updateStorageItem(initialValue)
  //         }
  //       })
  //   }, [])

  // Attempting to retrieve user from async storage
  /*
const user = getUser().then((res) => {
  if (res !== null) {
    console.log("getUser function called, found user: " + res);
    return res;
  } else
  console.log("There was an error with the getUser function.");
});
*/

  // const userGetter = () => {
  //   useEffect(() => {
  //     const user = getUser().then((res) => {
  //       if (res !== null) {
  //         console.log("getUser function called, found user: " + res);
  //         return res;
  //       } else console.log("There was an error with the getUser function.");
  //     });
  //   });
  // };

  // const user = userGetter();
};
