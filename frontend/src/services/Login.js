/* eslint-disable no-unused-vars */
import axios from "axios";
import { url } from "./Url";

export async function login(data) {
  let newUrl = `${url}/api/auth/login`;

  await axios
    .post(newUrl, data)
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token); // Store token in localStorage
        return data;
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
      throw error;
    });
}

export async function adminlogin(data) {
  let newUrl = `${url}/api/auth/adminLogin`;

  await axios
    .post(newUrl, data)
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token); // Store token in localStorage
        return data;
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
      throw error;
    });
}

export async function Logout() {
  localStorage.removeItem("token");
}
