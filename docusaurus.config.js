// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '3n3a\'s Blog',
  tagline: 'blogging is like writing docs but cooler',
  url: 'https://blog.3n3a.ch',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '3n3a',
  projectName: 'blog',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
          blogTitle: '3n3a\'s Blog',
          showReadingTime: true,
          editUrl:
            'https://github.com/3n3a/blog/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '3n3a\'s Blog',
        logo: {
          alt: 'my pink logo',
          src: 'img/pink.png',
        },
        items: [
          {
            href: 'https://github.com/3n3a/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '3n3a\'s work',
            items: [
              {
                label: 'Personal Website',
                to: 'https://3n3a.ch',
              },
              {
                label: 'Pinkness 10000',
                to: 'https://pink.enea.tech',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/3n3a/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 3n3a's Blog. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
