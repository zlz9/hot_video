import { defineStore } from "pinia";
export const useChatStore = defineStore("chat", {
  state: () => ({
    chatList: new Array<WsMsg>(),
    friendList: new Array<FriendListRes>(),
  }),
  getters: {},
  actions: {
    pushChatList(data: WsMsg) {
      this.chatList.push(data);
    },
  },
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
