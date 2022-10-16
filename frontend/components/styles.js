import { StyleSheet } from "react-native";

const color_bg = "#bcc";
const color_text = "#fff";
const color_primary = "#abf";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_bg,
    alignItems: "center"
  },
  input: {
    width: '75%',
    backgroundColor: color_text,
    alignItems: "center",
    padding: '3%',
    borderRadius: '10%',
    margin: '2%',
    top: '15%'
    
  },

  buttonContainer:{
    top: '20%',
    display: 'flex',
    flexDirection: 'row',
    padding: '10%',
  },
  button: {
    backgroundColor: color_primary,
    padding: '5%',
    borderRadius: '10%',
    margin: '5%'
  },
  logo: {
    width: '75%',
    height: '15%',
    top: '8%'
  },
  text: {
    color: color_text,
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
