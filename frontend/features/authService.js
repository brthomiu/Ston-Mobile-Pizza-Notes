import axios from "axios";
import { storeUser } from "./storeUser";

const API_URL = "/api/users/";

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    storeUser("user");
  }
};
