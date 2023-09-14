import { defaultTheme, defineUserConfig } from 'vuepress';
import { navbar } from './configs/navbar';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Alex & Mike',
  description: 'Wedding information site for guests of the wedding of Alex Short and Mike Phillips',
  theme: defaultTheme({
    navbar: navbar
  })
})
