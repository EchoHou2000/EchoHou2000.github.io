import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: '刷题笔记',
    icon: 'pen-to-square',
    link: '/posts/leetcode/'
  },
  {
    text: 'Spring学习',
    icon: 'pen-to-square',
    link: '/posts/Java/'
  },
  {
    text: '牛客文章',
    icon: 'book',
    link: 'https://www.nowcoder.com/users/258122345'
  },
]);
