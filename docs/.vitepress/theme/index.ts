import Theme from 'vitepress/theme'
import './style.css'
import { createVfm } from 'vue-final-modal'
import { Carousel, Slide } from '@jambonn/vue-concise-carousel';
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css'

const customTheme: typeof Theme = {
  Layout: Theme.Layout,
  enhanceApp: async ({ app }) => {
    app.use(createVfm());
    app.component('carousel', Carousel);
    app.component('slide', Slide);
  }
}

export default customTheme;
