import {themes as prismThemes} from 'prism-react-renderer';
const simplePlantUML = require("@akebifiky/remark-simple-plantuml"); // объявляем плагин для plantuml

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'DEPOSIT SERVICE',
  tagline: 'документация',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'docusaurus', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

/**
const config = {
  title: 'doc-as-a-code-workshop', //Название сайта на начальной странице
  tagline: 'Туториал', // Описание сайта на начальной странице
  favicon: 'img/favicon.ico', // Иконка сайта
  url: 'https://itikineva.github.io/', // Адрес gitlab pages, обычно https://<username>.github.io
  baseUrl: 'doc-as-a-code-workshop', // Базовый url, обычно название репозитория
  organizationName: 'itikineva', // Имя GitHub пользователя
  projectName: 'doc-as-a-code-workshop', // Имя репозитория
  onBrokenLinks: 'warn', // Чтобы не падать при наличии неработающих ссылок
  onBrokenMarkdownLinks: 'warn', // Чтобы не падать при наличии неработающих ссылок
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
*/


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

//подключаем плагин для drawio
plugins: [
],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            remarkPlugins: [simplePlantUML], //подключаем плагин для plantuml
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],



  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'deposit service',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Все права защищены.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
