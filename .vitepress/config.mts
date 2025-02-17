import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Honey Toast",
  description: "A framework agnostic Toast Notification UI library written in Vanilla Javascript",
  appearance: "dark",
  outDir: "docs",
  base: "/honey-toast-doc/",
  themeConfig: {
    logo: '/images/logo-original.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: 'https://rbrahul.github.io/honey-toast' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'API References', link: '/api-references' }
        ]
      },
      {
        text: 'Framework Integration',
        items: [
          { text: 'React', link: '/getting-started' },
          { text: 'VueJS', link: '/api-references' },
          { text: 'Angular', link: '/api-references' },
          { text: 'Svelte', link: '/api-references' },
          { text: 'AstroJS', link: '/api-references' },
        ]
      },
      {
        text: 'How to?',
        items: [
          { text: 'Use with Promise', link: '/getting-started' },
          { text: 'Customise the design', link: '/api-references' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rbrahul/honey-toast' }
    ]
  }
})
