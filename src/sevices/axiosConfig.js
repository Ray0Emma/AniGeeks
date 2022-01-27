import axios from "axios";

const BASE_URL = "https://graphql.anilist.co";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  //   options = {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         query: query,
  //         variables: variables
  //     })
  // }
});

export default {
  getData() {
    return apiClient;
  },
};
