interface LoginParams {
  code: string;
  password: string;
  userName: string;
}
interface PageParams {
  tagId?: number;
  page: number;
  pageSize: number;
}

interface RegisterParams {
  email: string;
  password: string;
  userName: string;
  code: string;
}

interface CommentPage {
  id: number;
  page: number;
  pageSize: number;
}

interface LikeParams {
  infoId: number;
  userId: number;
}

interface Comment {
  content: any;
  level: any;
  parentId: any;
  toUserId: any;
  videoId: any;
}

interface PublishApi {
  tagIds: Array<number>;
  isTop: boolean;
  name: string;
  selfIntroduction: string;
  url: string;
}

interface userUpload {
  avatar: string;
  newPwd: string;
  nickName: string;
  oldPwd: string;
  selfIntroduction: string;
}
