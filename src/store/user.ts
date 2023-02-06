import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    token: "",
    userInfo: {} as Author,
    VideoIds: new Array<number>(),
    nickName: "",
  }),
  getters: {},
  actions: {
    clearUser() {
      this.token = "";
      this.userInfo = {} as Author;
      this.VideoIds = [];
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
