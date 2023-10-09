import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blogs/",

  lang: "zh-CN",
  title: "Echo的学习之路",
  description: "过不了动态规划的人生，但是还有贪心算法可选择",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
