import requests from "./request";
import qs from "qs";
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
// /api/video/history
export const videoHistoryApi = (ids: string): Promise<RootObject<VideoRes>> =>
  requests({
    url: `/api/video/history/ids=${ids}`,
  });

export const delVideoApi = (id: number): Promise<RootString> => {
  return requests({
    url: `/api/admin/delete/${id}`,
    method: "post",
  });
};
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
// export const chatListApi = (toUserId: any): Promise<RootObject<Chat>> => {
//   return requests({
//     url: `/api/chat/${toUserId}`,
//     method: "get",
//   });
// };

// 获取最新的聊天列表
export const newChatListApi = (toUserId: any) => {
  return requests({
    url: `/api/chat/new/${toUserId}`,
    method: "get",
  });
};

// 获取更多聊天列表
export const moreChatListApi = (
  toUserId: any,
  page: any,
  pageSize: any
): Promise<RootObject<WsMsg>> => {
  return requests({
    url: `/api/chat/more/${toUserId}/${page}/${pageSize}`,
    method: "get",
  });
};

export const sendMessageApi = (
  toUserId: any,
  msg: string
): Promise<RootObject<WsMsg>> => {
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
/**
 * 评论模块与点赞
 */
export const CommentApi = (
  params: CommentPage
): Promise<RootObject<Comment>> => {
  return requests({
    url: "/api/comment",
    params,
  });
};

export const likeCountByIdApi = (id: number): Promise<RootRes<number>> => {
  return requests({
    url: `/api/comment/count/${id}`,
  });
};
export const likeCommentApi = (params: LikeParams): Promise<RootString> => {
  return requests({
    url: "/api/comment/like",
    params,
    method: "post",
  });
};

export const disLikeCommentApi = (params: LikeParams): Promise<RootString> => {
  return requests({
    url: "/api/comment/dislike",
    params,
    method: "post",
  });
};
export const publishCommentApi = (params: any): Promise<RootString> => {
  return requests({
    url: "/api/publsh/comment",
    method: "post",
    data: params,
  });
};
