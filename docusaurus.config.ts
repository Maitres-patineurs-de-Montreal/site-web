import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Club des Maîtres-patineurs de Montréal',
  tagline: 'Vous cherchez une activité physique qui vous garde en forme dans une atmosphère de camaraderie?',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://club-maitres-patineurs-montreal.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Club-maitres-patineurs-montreal', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          blogSidebarCount: 10,
          showReadingTime: true,
          routeBasePath: 'nouvelles',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Maîtres-patineurs de Montréal',
      logo: {
        alt: 'Logo du Club des Maîtres',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Informations',
        },
        {
          to: '/nouvelles',
          label: 'Nouvelles',
          position: 'left'
        },
        {
          to: '/docs/calendrier',
          label: 'Calendrier',
          position: 'left'
        },
        {
          to: '/docs/tarifs-et-inscription',
          label: 'Tarifs et inscription',
          position: 'left'
        },
        {
          to: '/nouvelles/authors',
          label: 'Contactez-nous',
          position: 'left'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Politiques',
          items: [
            {
              label: 'Termes et conditions',
              to: '/termes-et-conditions',
            },
            {
              label: 'Règlements des séances',
              href: '/reglements',
            },
          ],
        },
        {
          title: 'Suivez-nous',
          items: [
            {
              label: 'Page Facebook',
              href: 'https://www.facebook.com/maitres.patineurs.montreal',
            },
            {
              label: 'Groupe Facebook',
              href: 'https://www.facebook.com/groups/1727288670866489',
            },
            {
              label: 'Page Instagram',
              href: 'https://www.instagram.com/maitrespatineurs/',
            },
          ],
        },
        {
          title: 'Liens utiles',
          items: [
            {
              label: 'Patinage de vitesse Québec',
              href: 'https://www.patinagedevitessequebec.ca',
            },
            {
              label: 'IceReg',
              href: 'https://icereg.ca/#!/series/maitres-patineurs-de-montreal',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Club des Maîtres-patineurs de Montréal. Site web construit avec Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
