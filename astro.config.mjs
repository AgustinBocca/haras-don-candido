import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 4001,
    // https: {
    //   key: fs.readFileSync('./https/certificate.key'),
    //   cert: fs.readFileSync('./https/certificate.pem')
    // }
  },
  i18n:{
    defaultLocale: 'es',
    locales:['es' , 'en'],
    routing: { prefixDefaultLocale : 'false'}
  }
})
