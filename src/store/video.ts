import { defineStore } from "pinia";
export const useVideoStore = defineStore("video", {
  state: () => ({
    url: "",
    isReload: false,
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      // {
      //   key: "video",
      //   storage: localStorage,
      // },
    ],
  },
});
