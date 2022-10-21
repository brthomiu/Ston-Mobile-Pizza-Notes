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
    borderRadius: 8,
    margin: "2%",
    top: "5%",
    resizeMode: "contain",
  },

  resetInput: {
    width: "75%",
    backgroundColor: color_white,
    alignItems: "center",
    padding: "5%",
    borderRadius: 8,
    margin: "2%",
    top: "28%",
    resizeMode: "contain",
  },

  resetText: {
    top: "25%",
    fontSize: 20,
  },
  newUserText: {
    fontSize: 20,
    top: "3%"
  },
  buttonContainer: {
    top: "50%",
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
    top: "5%",
  },
  button: {
    backgroundColor: color_dark,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
    width: "75%",
    alignContent: "center",
  },
  createButton: {
    position: "relative",
    top: "-35%",
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
    top: "4%",
    marginBottom: "5%",
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
    padding: "3%",
    marginHorizontal: "7%",
    marginTop: "5%",
    marginBottom: "5%",
    flexDirection: "row",
  },
  textButtons2: {
    padding: "3%",
    color: color_text
  },
  googleIcon: {
    marginRight: "7%",
  },
  googleButtonText: {
    color: color_text,
    alignSelf: "center",
  },
  loginText: {
    padding: "6%",
  }
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_bg,
    alignItems: "center",
    resizeMode: "contain",
  },
  buttonContainer: {
    top: "50%",
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
    top: "8%",
  },
  button: {
    backgroundColor: color_dark,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
    width: "75%",
    alignContent: "center",
  },
  buttonText: {
    color: color_white,
    alignSelf: "center",
  },
  textButtons: {
    top: "1700%",
  }
});

export const headerStyles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: color_white,
    alignItems: "center",
    justifyContent: "space-between",
    height: "6%",
  },

  text: {
    color: color_white,
    fontSize: 25,
    textAlign: "center",
  },
});


export const termsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_bg,
    alignItems: "center",
    resizeMode: "contain",
  },
  button: {
    top: "25%",
    backgroundColor: color_dark,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
  },
  text: {
    top: "10%",
    color: color_text,
    fontSize: 25,
    textAlign: "center",
  },
  buttonText: {
    color: color_white,
  },
});
