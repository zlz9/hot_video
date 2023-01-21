import { defineStore } from "pinia";
export const useChatStore = defineStore("chat", {
  state: () => ({
    chatList: new Array<WsMsg>(),
    friendList: new Array<FriendListRes>(),
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: "chat",
        storage: localStorage,
      },
    ],
  },
});
