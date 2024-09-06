import axios from "axios";

const instance = axios.create({
  baseURL: "https://skimmer.pythonanywhere.com/api",
});

export default instance;
