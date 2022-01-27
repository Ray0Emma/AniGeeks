import axios from "axios";

const BASE_URL = "https://graphql.anilist.co";

const apiClient = axios.create({
  baseURL: BASE_URL,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default {
  getData() {
    return apiClient;
  },
};
