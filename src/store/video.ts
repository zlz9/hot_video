import { defineStore } from "pinia";
export const useVideoStore = defineStore("video", {
  state: () => ({
    url: "",
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: "video",
        storage: localStorage,
      },
    ],
  },
});
