import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    token: "",
    tagList: [],
  }),
  getters: {},
  actions: {},
});
