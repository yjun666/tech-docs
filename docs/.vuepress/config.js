import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "VuePress",
  description: "My first VuePress Site",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    // navbar: ['/', '/get-started'],
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/frontend/" },
    ],
    sidebar: {
      "/frontend/": [
        {
          title: "Vue",
          collapsable: false,
          children: ["/frontend/vue/vue2.md", "/frontend/vue/vue3.md"],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
