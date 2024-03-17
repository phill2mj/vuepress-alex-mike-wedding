import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  title: 'Alex and Mike',
  description: 'A website to support the wedding of Alex and Mike',
  head: [
    [
      'link',
      { rel: 'icon', href: 'favicon.ico' }
    ],
    [
      'link',
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100' }
    ],
    [
    'link',
     { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css' }
    ]
    // [
    //   'script',
    //   { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-025BZH20HL' }
    // ],
    // [
    //   'script',
    //   {},
    //   `window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());

    //   gtag('config', 'G-025BZH20HL');`
    // ]
  ],
  appearance: false,
  themeConfig: {
    siteTitle: '',
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'RSVP', link: '/rsvp' },
      { text: 'Itinerary', link: '/itinerary' },
      { text: 'Lodging', link: '/lodging' },
      { text: 'Transportation', link: '/transportation'},
      { text: 'Our Story', link: '/our-story'},
    ],
    search: {
      provider: 'local'
    },
    footer: {
      // message: 'message goes here',
      copyright: 'Copyright © 2023-present'
    },
  },
  vite: {
    plugins: [
      vuetify()
    ],
    ssr: {
      noExternal: ['@inertiajs/server',/\.css$/, /\?vue&type=style/, /^vuetify/],
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/CustomNavBar.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPContent\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/CustomContent.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/CustomHome.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/CustomFooter.vue', import.meta.url)
          )
        }
      ]
    }
  },
  sitemap: {
    hostname: 'https://alexandmike.net'
  }
})
