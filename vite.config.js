import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    supported: {
      "top-level-await": true, //browsers can handle top-level-await features
    },
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
    proxy: {
      "/csdn_api": {
        target: "https://blog.csdn.net/weixin_49356932", // 需要代理的后端接口
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求
        rewrite: (path) => path.replace(/^\/csdn_api/, ""),
      },
    },
  },
  plugins: [vue()],
});
