import axiosConfig from "./axiosConfig";

export default {
  getTitle(data) {
    return axiosConfig.getData().post("/", data);
  },
  getTopAnime(data) {
    return axiosConfig.getData().post("/", data);
  },
  getTopManga(data) {
    return axiosConfig.getData().post("/", data);
  },
};
