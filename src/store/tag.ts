import { defineStore } from "pinia";
export const useTagStore = defineStore("tag", {
  state: () => ({
    tag: new Array<tagRes>(),
  }),
  getters: {},
  actions: {},
});
