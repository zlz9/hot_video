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
