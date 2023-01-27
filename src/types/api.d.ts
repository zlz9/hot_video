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
