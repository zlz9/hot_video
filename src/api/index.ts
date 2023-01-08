import { pa } from "element-plus/es/locale";
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
export const LoginApi = (data: LoginParams) => {
  requests({ url: "/api/login", data });
};

export const LogoutApi = () => {
  requests({
    url: "/api/logout",
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
): Promise<RootObject<VideoByTagRes>> => {
  return requests({
    url: "/api/video/category",
    method: "get",
    params: page,
  });
};
