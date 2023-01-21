import requests from "./request";
/**
 * swiper模块
 */
export const SwiperHotApi = (): Promise<RootObject<swiperRes>> => {
  return requests({
    url: "/api/swiper/hot",
    method: "get",
  });
};
export const SwiperNewApi = (): Promise<RootObject<swiperRes>> => {
  return requests({
    url: "/api/swiper/new",
    method: "get",
  });
};
/**
 * 登录
 */
export const LoginApi = (data: LoginParams): Promise<RootStringData> => {
  return requests({ url: "/api/login", params: data, method: "post" });
};
// 获取当前用户信息
export const CurrentUserApi = (): Promise<RootRes<Author>> => {
  return requests({
    url: "/api/userinfo/current",
    method: "get",
  });
};
export const LogoutApi = () => {
  requests({
    url: "/api/logout",
  });
};
// 获取邮箱验证码
export const sendEmailApi = (
  emailReceiver: string
): Promise<RootObject<RootString>> => {
  return requests({
    url: "/api/sendEmail",
    method: "get",
    params: { emailReceiver: emailReceiver },
  });
};

export const RegisterApi = (
  params: RegisterParams
): Promise<RootObject<string>> => {
  return requests({
    url: "/api/register",
    method: "post",
    data: params,
  });
};
/**
 * 标签
 */
export const TagAllApi = (): Promise<RootObject<tagRes>> => {
  return requests({
    url: "/api/tag/all",
  });
};
export const getVideoByTagApi = (id: number) => {
  requests({
    url: `/api/tag/${id}`,
  });
};
/**
 * 视频
 */
export const FunnyVideoApi = (): Promise<RootObject<VideoRes>> => {
  return requests({
    url: "/api/video/funny",
  });
};

export const GameVideoApi = (): Promise<RootObject<VideoRes>> => {
  return requests({
    url: "/api/video/game",
  });
};

export const HotVideoApi = (): Promise<RootObject<VideoRes>> => {
  return requests({
    url: "/api/video/hot",
  });
};

export const LastVideoApi = (): Promise<RootObject<VideoRes>> => {
  return requests({
    url: "/api/video/new",
  });
};

export const RecommendApi = (): Promise<RootObject<VideoRes>> => {
  return requests({
    url: "/api/video/recommend",
  });
};
export const HotVideoTopApi = (
  page: PageParams
): Promise<RootObject<VideoRes>> => {
  return requests({
    url: `/api/top/hot`,
    method: "get",
    params: page,
  });
};
export const VideoByTagApi = (
  page: PageParams
): Promise<RootObject<VideoRes>> => {
  return requests({
    url: "/api/video/category",
    method: "get",
    params: page,
  });
};

// 根据用户id查找视频列表
export const VideoListByUserIdApi = (
  id: number
): Promise<RootObject<VideoRes>> => {
  return requests({
    url: `/api/video/user/${id}`,
  });
};
// 根据id查找用户信息
export const UserByIdApi = (id: number): Promise<RootRes<Author>> => {
  return requests({
    url: `/api/user/${id}`,
    method: "get",
  });
};
// 聊天模块
export const chatListApi = (toUserId: any): Promise<RootObject<Chat>> => {
  return requests({
    url: `/api/chat/${toUserId}`,
    method: "get",
  });
};

export const sendMessageApi = (toUserId: any, msg: string) => {
  return requests({
    url: `/api/send/${toUserId}/${msg}`,
    method: "get",
  });
};

// 好友模块
export const FriendListApi = (): Promise<RootObject<FriendListRes>> => {
  return requests({
    url: "/api/friend/list",
    method: "get",
  });
};
