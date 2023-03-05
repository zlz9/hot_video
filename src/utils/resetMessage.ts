import { ElMessage } from "element-plus"; //引入message弹出框

let messageDom: any = null;
const resetMessage = (options: any): void => {
  if (messageDom) messageDom.close(); // 判断弹窗是否已存在,若存在则关闭
  messageDom = ElMessage(options);
};
const typeArr = ["success", "error", "warning", "info"];
typeArr.forEach((type) => {
  resetMessage[type] = (options: any) => {
    if (typeof options === "string") options = { message: options };
    options.type = type;
    return resetMessage(options);
  };
});
export const message = resetMessage;
