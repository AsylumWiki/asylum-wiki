import { defineConfig } from "vitepress";
import enConfig from "../src/configs/en";
import zhHantConfig from "../src/configs/zh-hant";
import zhHansConfig from "../src/configs/zh-hans";

// plugins
import footnote from "markdown-it-footnote";

// https://vitepress.dev/reference/site-config
export default () => {
  globalThis.localStorage ??= {
    getItem: () => {},
    setItem: () => {},
  } as unknown as Storage;
  globalThis.navigator ??= {
    languages: [],
  } as unknown as Navigator;
  return defineConfig({
    lang: "en",
    title: "AsylumWiki",
    description:
      "AsylumWiki is dedicated to providing information and resources to all those seeking protection from persecution and serious human rights violations",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [{ text: "Home", link: "/" }],
      sidebar: [],
      socialLinks: [
        { icon: "github", link: "https://github.com/AsylumWiki/asylum-wiki" },
        { icon: "twitter", link: "https://x.com/AsylumWiki" },
        {
          icon: {
            svg: '<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m24 12c0 6.6274-5.3726 12-12 12-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12zm-11.57-3.14107c-1.1671.48547-3.49985 1.49027-6.99809 3.01437-.56806.2259-.86563.4469-.89272.663-.04579.3652.41154.509 1.0343.7048.08471.0267.17249.0543.26247.0835.6127.1992 1.43688.4322 1.86535.4414.38865.0084.82244-.1518 1.30135-.4807 3.26854-2.2063 4.95574-3.32149 5.06164-3.34553.0748-.01696.1783-.03829.2485.02408.0701.06235.0633.18045.0558.21215-.0453.1931-1.8405 1.8621-2.7695 2.7258-.2896.2692-.495.4602-.537.5038-.0941.0978-.19.1902-.2821.279-.5692.5487-.99607.9602.0236 1.6322.4901.3229.8822.5899 1.2734.8563.4272.291.8533.5812 1.4046.9426.1405.0921.2746.1877.4053.2808.4972.3545.9439.6729 1.4957.6221.3207-.0295.6519-.331.8201-1.2302.3975-2.1252 1.1789-6.7299 1.3595-8.62742.0159-.16625-.004-.37901-.02-.4724-.016-.0934-.0494-.22647-.1708-.32498-.1438-.11666-.3657-.14126-.465-.13952-.4514.00796-1.1438.24874-4.4764 1.63485z" fill-rule="evenodd"/></svg>',
          },
          link: "https://t.me/AsylumWiki",
        },
      ],
    },
    srcDir: "src/docs",
    locales: {
      root: enConfig,
      "zh-hans": zhHansConfig,
      "zh-hant": zhHantConfig,
    },
    markdown: {
      config: (md) => {
        md.use(footnote);
      },
    },
  });
};
