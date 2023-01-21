import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    token: "",
    userInfo: {} as Author,
  }),
  getters: {},
  actions: {
    clearUser() {
      this.token = "";
      this.userInfo = {} as Author;
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
