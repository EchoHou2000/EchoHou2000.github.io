import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";
// import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  // theme: hopeTheme({
  //   sidebar: "heading",
  // }),
  base: "/blogs/",

  lang: "zh-CN",
  title: "Echo的学习之路",
  description: "过不了动态规划的人生，但是还有贪心算法可选择",

  theme,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
