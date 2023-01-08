interface RootObject<T> {
  code: number;
  data: T[];
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
