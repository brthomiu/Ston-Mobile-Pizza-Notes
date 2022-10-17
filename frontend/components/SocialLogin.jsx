import { loginStyles } from "./styles";
import { Text, View, TouchableOpacity, onPress, Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import GoogleIcon from "../assets/google.png";

WebBrowser.maybeCompleteAuthSession();

export default function SocialLogin() {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUser] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "935232416448-a0jkr28c8fotsjvo6vmidfih087afh9u.apps.googleusercontent.com",
    webClientId:
      "935232416448-a0jkr28c8fotsjvo6vmidfih087afh9u.apps.googleusercontent.com",
    responseType: "token",
    redirectUri: "https://auth.expo.io/@brthomiu/frontend",
    state: "SrSxrDMvKi",
    client_id:
      "935232416448-a0jkr28c8fotsjvo6vmidfih087afh9u.apps.googleusercontent.com",
    access_type: "online",
    scope:
      "openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch(
      "https://googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View>
          <Image source={{ uri: userInfo.picture }} />
          <Text>Welcome {userInfo.name}</Text>
        </View>
      );
    }
  }

  return (
    <View style={loginStyles.container}>
      {showUserInfo()}
      <TouchableOpacity
        title={accessToken ? "Get User Data" : "Login"}
        onPress={
          accessToken
            ? getUserData
            : () => {
                promptAsync({ showInRecents: true });
              }
        }
        style={loginStyles.googleButton}
        disabled={!request}
      >
        <Image source={GoogleIcon} style={loginStyles.googleIcon} />
        <Text style={loginStyles.googleButtonText}>Login With Google</Text>
      </TouchableOpacity>
    </View>
  );
}
