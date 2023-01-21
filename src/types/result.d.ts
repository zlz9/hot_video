interface RootObject<T> {
  code: number;
  data: T[];
}

interface RootRes<T> {
  code: number;
  data: T;
}

interface RootString {
  code: number;
  msg: string;
}

interface VideoRes {
  id: number;
  cover: string;
  url: string;
  name: string;
  createTime: number;
  updateTime: number;
  author: Author;
  weight: number;
  selfIntroduction: string;
}

interface Author {
  id: number;
  nickName: string;
  avatar: string;
  selfIntroduction: string;
}

interface swiperRes {
  id: number;
  cover: string;
  url: string;
  name: string;
}

interface tagRes {
  id: number;
  tagName: string;
  createTime?: any;
  updateTime?: any;
  authorId: number;
  isDel: boolean;
  icon: string;
}

interface Author {
  id: number;
  nickName: string;
  avatar: string;
  selfIntroduction: string;
}

interface RootStringData {
  code: number;
  msg: string;
  data: token;
}

interface token {
  token: string;
}

interface Chat {
  message: string;
  status: boolean;
  createTime: number;
  sendUser: Author;
  receiveUser: Author;
}

interface FriendListRes {
  friend: Friend;
  lastMsg: string;
  createTime: number;
}

interface Friend {
  id: number;
  nickName: string;
  avatar: string;
  selfIntroduction: string;
}

interface WsMsg {
  id?: number;
  createTime?: number;
  message: string;
  receiveUser: Author;
  sendUser: Author;
  status?: boolean;
}
