import { StyleSheet } from "react-native";

const color_bg = "#bcb5b3";
const color_white = "#f8f8f8";
const color_dark = "#434345";
const color_text = "#231f20";
const color_primary = "#abf";
const color_googleBlue = "#4285F4";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_bg,
    alignItems: "center",
    resizeMode: "contain",
  },
  input: {
    width: "75%",
    backgroundColor: color_white,
    alignItems: "center",
    padding: "5%",
    borderRadius: 8,
    margin: "2%",
    top: "12%",
    resizeMode: "contain",
  },

  buttonContainer: {
    top: "15%",
    display: "flex",
    flexDirection: "row",
  },
  loginButton: {
    backgroundColor: color_dark,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
    width: "75%",
    alignContent: "center",
    top: "10%",
  },
  button: {
    backgroundColor: color_dark,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
    width: "75%",
    alignContent: "center",
  },
  googleButton: {
    backgroundColor: color_white,
    padding: "5%",
    borderRadius: 8,
    width: "75%",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: "82%",
    height: "18%",
    top: "8%",
    resizeMode: "contain",
  },
  text: {
    color: color_text,
  },
  buttonText: {
    color: color_white,
    alignSelf: "center",
  },
  terms: {
    flexDirection: "row",
    margin: "10%",
  },
  textButtons: {
    marginHorizontal: "10%",
    marginTop: "10%",
    marginBottom: "5%",
    flexDirection: "row",
  },
  googleIcon: {
    marginRight: "7%",
  },
  googleButtonText: {
    color: color_text,
    alignSelf: "center",
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_primary,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: color_text,
    fontSize: 25,
    textAlign: "center",
  },
});

export const termsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_bg,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: color_dark,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
  },
  text: {
    color: color_text,
    fontSize: 25,
    textAlign: "center",
  },
  buttonText: {
    color: color_white,
  },
});
