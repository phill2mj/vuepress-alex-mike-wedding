// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import './style.css'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import { Carousel, Slide } from '@jambonn/vue-concise-carousel';
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css'
import { createVuetify } from 'vuetify/lib/framework.mjs';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customTheme: typeof Theme = {
  Layout: Theme.Layout,
  enhanceApp: async ({ app }) => {
    app.use(createVfm());
    app.use(createVuetify({
      components,
      directives
    }))
    app.component('carousel', Carousel);
    app.component('slide', Slide);
  }
}

export default customTheme;
