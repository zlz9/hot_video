interface RootObject<T> {
  code: number;
  data: T[];
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
