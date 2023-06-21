import MyLayout from './MyLayout.vue'
import DefaultTheme from 'vitepress/theme' //viteperss的主题

export default {
  ...DefaultTheme,
  Layout: MyLayout,
    
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
  }
}