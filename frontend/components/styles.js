import { StyleSheet } from "react-native";

const color_bg = "#bcb5b3";
const color_white = "#f8f8f8";
const color_dark = "#434345";
const color_text = "#231f20";
const color_primary = "#abf";
const color_googleBlue = "#4285F4";
const color_green = "#97d768";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    resizeMode: "cover",
  },
  background: {
    flex: 1,
    position: "absolute",
    resizeMode: "contain",
  },
  backgroundImage: {
    flex: 1,
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
    alignItems: "flex-start",
    borderRadius: 8,
    margin: "2%",
    top: "25%",
    resizeMode: "contain",
  },

  resetText: {
    color: color_white,
    top: "20%",
    fontSize: 24,
  },
  newUserText: {
    color: color_white,
    fontSize: 24,
    top: "3%",
  },
  buttonContainer: {
    top: "50%",
    display: "flex",
    flexDirection: "row",
  },
  loginButton: {
    backgroundColor: color_green,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
    width: "75%",
    alignContent: "center",
    top: "5%",
  },
  button: {
    backgroundColor: color_green,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
    width: "75%",
    alignContent: "center",
  },
  createButton: {
    position: "relative",
    top: "-35%",
    backgroundColor: color_green,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
    width: "75%",
    alignContent: "center",
  },
  googleButton: {
    backgroundColor: color_googleBlue,
    padding: "4%",
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
    color: color_dark,
    fontSize: 16,
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
    marginBottom: "8%",
    flexDirection: "row",
    color: color_white,
  },
  textButtons2: {
    padding: "3%",
    color: color_white,
  },
  textButtons3: {
    top: "2200%",
    color: color_white,
  },
  googleIcon: {
    right: 24,
    marginRight: "5%",
    backgroundColor: color_white,
    borderRadius: 10,
  },
  googleButtonText: {
    color: color_white,
    alignSelf: "center",
    fontSize: 16,
  },
  loginText: {
    padding: "6%",
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    resizeMode: "contain",
  },
  buttonContainer: {
    top: "50%",
    display: "flex",
    flexDirection: "row",
  },
  button: {
    backgroundColor: color_green,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
    width: "75%",
    alignContent: "center",
    top: "8%",
  },
  buttonText: {
    color: color_dark,
    fontSize: 16,
    alignSelf: "center",
  },
  textButtons: {
    color: color_white,
    fontSize: 16,

  },
  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: color_dark,
    borderRadius: 10,
    top: "50%",

  }
});

export const headerStyles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: color_green,
    alignItems: "center",
    justifyContent: "space-between",
    height: "6%",
  },

  subContainer: {
    alignItems: "flex-end",
    padding: 8,
    left: "35%",
  },

  text: {
    color: color_white,
    fontSize: 16,
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
