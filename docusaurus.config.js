// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import path from 'path';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blitz API Documentation',
  tagline: 'Blitz API Docs & Market Data',
  favicon: 'img/icon.png',

  url: 'http://localhost:3000',
  baseUrl: '/',

  organizationName: 'Quantxpress Technology Private Limited',
  projectName: 'BlitzAPI',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  staticDirectories: ['static'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            [
              require('remark-mermaid'),
              {
                outputDir: path.resolve(__dirname, 'static/mermaid-images'),
                format: 'svg',
                filename: () => 'BlitzApiFlow.svg',
              },
            ],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Blitz API Docs',
      logo: {
        alt: 'Quantxpress Logo',
        src: 'img/QX-icon.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'BLITZAPI',
        // },
        {
          href: 'https://github.com/Quantxpress/BlitzAPI',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'BLITZAPI',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quantxpress Technology Private Limited. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'], 
    },
  },
};

export default config;
