const isDev = false
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)

  loading: '~/components/loader.vue',

  router: {
    prefetchLinks: false,
    middleware: 'preload'
  },
  head: {
    title: 'Сайт',
    htmlAttrs: {
      lang: 'ru',
      translate:'no'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },

      { property:"og:url", content:""},
      { property:"og:type", content:""},
      { property:"og:title", content:""},
      { property:"og:description", content:""},
      { property:"og:image", content:""}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAFmHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja1VdbkisnDP1nFVkCEi+xHJpHVXaQ5ecAosf2eKbuJLdSFbfd0DQISUc6yKb/9ecwf+DDlKzxIUnMMVp8fPaZCzpi96esO1m/7vpgT+dp3NwvGEMOrduPEnX+GSf7JIkKeuFBkFR9cT2/yF7ly4sg3o2bGs1+U0FZBTneL0gFlG2WjVnSowlX3207lsj+mXkL/Vnt12ef4L0WsI9j7o6cXXfZCrj1M66g43BnJ5iI1+i7NeLdMQkOeecn+6CVeUXl7tEX4y+guLjHDQaenRnv9u04hZdxFWiWix92dvXe+Xk82fRqzvmN0cSM0bd1xUe4NKpRx5TVw8QLLndrWcSV8Avop3VlXGIQvRWQN1vthatSJgYsgzw1KjSor7ZShYqeOye0zJXdGhOXOHOdqBHQwUWDk8uuATV2FfA6jPKtC61989qukmDjRpjJBGGEFWzm7XdcXwoaY4Y8kZXbV9CLZ1JAjYncvGMWAKFx4igsB5/r9TNxdUAwLDcLDCz22iKuQBpbM47cAtphYkC7c41SUwFwEfYOUIYcELCRXKBINjEnIvhRgE+BIGHn+QIEFAI3aMlIjQhwkDHYG2sSrbkceA+DswBEcNElQJNdAVYexIb4SV4QQyW44EMIMaQgIYcSXfQxxBhTnORXkks+hRRTSpJyKuLES5AoScRIlpI5O5BjyDGnLDnnUrBpgeSC1QUTSrn4cpe/whWvdMmVr1IRPtXXUGNNVUzNtTRuroEnWmypScutdOoIpe576LGnLj33MhBqww0/wogjDRl5lBs1MhvWT9evo0YHNV5IzYnpRg1LUzoiaNJJmJgBMfYExNNEAAHNEzMr5D2bCd3EzGZGVgSGlmGC02giBgR9Jw6Dbuw+kHvCzXj/r3Djg5yZ0P0O5MyE7gvkPuP2BrU2T5tqnVkIzTScTrUO6YdJhQVfnEm/3pqfLvifCnLdbveU2kHKq3uBo/N6XXpC6PSxZxfE13eCrtXN1BCuAV/El+S45NTa7Liurg/9WTHzRtNbHuKk5z2aZ30yJXukaCptbhOEat37zfpIO1+1qdK1umCdYNveAESpPvDNj6vGpVGpL+aqVkW1ki60jYsqPsaQoVY4ak03mG/V+UZNpy6kZh0SiI2UQpm3zRk8MFI6DxUL7rXhKFhbDYqI92o1x2pSa0P1BQMtbf2PW1Ck6dvSOjM8xq1Mz7nK1tLbWjZcCYd9ufXyH45z1DABpwgqAji+7JiLTuoOv1mH/qA1b14MYRU7uW+PRib1gI/V7TFUMKJrwJA7UFFdlHBbEG8P123JZXtRSzIKgNUBu29Xe5oka2Y3iGyoPEXfVF5uHkBs6Sh00nNknYSLTjUxRQPXsfcnGfqeJWdW4So6/xhTq1VkUHe1FZChiN2yGAEVNIZgwp6Hg0HFXSR7Hk6tbTKYXYe8BWdvo+SirKpZr3mibimk8VL1zeVI1Hu5er/WGRw8qE02SvbDTntHb2o93TAIkmM/4WgJWz5Mks1HQE9NQoW5lfBORdoDe5CqPsy8QYVz4namRZyY3rdrL1TY/YGJPABvn12iOPgLVOmOdR1uNGclQkXuCNH0EI3R6Lht19cYa0h7RXBO3RpRT5jtRtEYxNptZDzhxiikdWs+MAD8Y6cow12GWHMLSmtooAw4YWCVMsoBLAvgVe4An1eNuJ4M88aaNJiArB60XI/cE3vea6zmrKCv1KMNP3A5lkZ2GzQhUp1sOBGDEkfl4U+0vsUBoyuasVHpESXUSFmXJ/fBWUcmKCvBeZq6rvdwwwTKN59OIGh/TiB6ZPjyPZGbR0bndEgXhZlSt0eNN5LyqI/xK3HmzQERlGbazTh5Jgqd1GB5Q93mn3C9/c8E4V/TaCA28zdVkflnmTnjqgAAAGR6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB42j1KQQ6AMAy69xU+YYNG63OWzoM3D/4/YmOEFAjUzutOWwq+GsPhu8/m4g+gZwM3xUGwvYcppxSMWlPrwc7gII2UeT18lcoH9qQXa8FWiNcAAAGEaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1NF0YqoHUQ6ZKhOFkRFHKWKRbBQ2gqtOphc+gVNGpIUF0fBteDgx2LVwcVZVwdXQRD8AHFydFJ0kRL/lxRaxHhw3I939x537wChXmaq2TEBqJplJGNRMZNdFbte4UcIvRjEgMRMPZ5aTMNzfN3Dx9e7CM/yPvfn6FNyJgN8IvEc0w2LeIN4ZtPSOe8TB1lRUojPiccNuiDxI9dll984FxwWeGbQSCfniYPEYqGN5TZmRUMlniYOK6pG+ULGZYXzFme1XGXNe/IXBnLaSorrNEOIYQlxJCBCRhUllGEhQqtGiokk7Uc9/COOP0EumVwlMHIsoAIVkuMH/4Pf3Zr5qUk3KRAFOl9s+2MU6NoFGjXb/j627cYJ4H8GrrSWv1IHZj9Jr7W08BHQvw1cXLc0eQ+43AGGn3TJkBzJT1PI54H3M/qmLDB0C/Ssub0193H6AKSpq+Ub4OAQGCtQ9rrHu7vbe/v3TLO/H0rZcpfdKyqKAAAPVWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDphZDlhMGI4Ny02MjM4LTRhYmMtYTJlMi04ZDMyYTAzZGNiYWYiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDMwZTNkODYtNTUxMS00ZDFkLTkxYjktNmRhNmMyNmY2ZTI0IgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OTc1OTkzYzMtMjFkOC00ZWM5LWJhNjgtZWMxMjAwMTZiZTYwIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTU4NTM5NTIzNDIzMDM3OCIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjE4IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8aXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgIDxpcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvblNob3duPgogICA8aXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgIDxpcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpSZWdpc3RyeUlkPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMzFhNDY3Yy0xODJmLTQ2ZTMtOGI1OS00MDhiMjg1NTE1MzEiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjAtMDMtMjhUMTg6MzM6NTQiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8cGx1czpJbWFnZVN1cHBsaWVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6SW1hZ2VTdXBwbGllcj4KICAgPHBsdXM6SW1hZ2VDcmVhdG9yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6SW1hZ2VDcmVhdG9yPgogICA8cGx1czpDb3B5cmlnaHRPd25lcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkNvcHlyaWdodE93bmVyPgogICA8cGx1czpMaWNlbnNvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkxpY2Vuc29yPgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+kUG+eAAAAARnQU1BAACxjwv8YQUAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAADnUAAA51AbljUTIAAAAHdElNRQfkAxwLITZTHg5YAAAEKUlEQVQ4EQEeBOH7Af///wAAAAAAARkAHXz/AAFRAf///wAAAAAAARgAIrgIAP+mAf///wAAAAAAAAAAABcBGlMEHgcdhQH7/OsLAQClBQEHHQH///8AAAAAAAAAAAAAAAAAABcAINz///8A////ACgBGiYEBQAAChcBF08BAAFCAgAENAMLAQkdBgAHKgABAPYFBfWEAP///wD///8AGQAeUf///wD///8AHgIKBygCGAf///8AABcAGzEgAB7K////AP///wD///8A////AP///wAXAB3vBAAA/Ab4AAUjLQIgau7//gb8AAEh6f/hbxgBIPACAAPoAAkAAAD///8A////AP///wAfCQQa////AP///wD///8AAf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAjBRUDJwQTEgAAAAAAAAAAHQEcVAAAAAAAAAAAABYAHiMcABp3////AP///wD///8A////ABkAHt3///8ABAIAAM3j/+UQAAAAAAAAAAAAAAAAAAAAAP8A/9wlARkvBAEA/NYlASg99AH0hP//BA4PAvt89v4FiP8AAgz9AgQ8AgIABvT0APi05/7kPwkAAN33/gI1+wADjQEAABEMCPi2ARcBF34KAAX09//+LRIB/ovyAAhbBQP12vb9A/cIAP8eAP///wD///8A////ABcEBR3///8A////AP///wD///8AAf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAaASEiGQEfuxkBGjoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeBRUjGgEctSYBGykAAAAAAAAAAAAAAAAAFgAguRkAHu0nAhgR////AP///wD///8A////AP///wD///8A////AP///wA8DwkCGAAd3BsAHbkAAAAABBgAHWn/APsmBgAE3tn+6O8BAQEAGwAjPAEB/UH/AP7QCAX/8Pn6ADoJAATdFgL2tMT99vgYAR/d/QD9Ix4BHWECAQH/AQIA/7n5AAAmGAAg7xkAGav5AeLL/v/98QT/AFz1+gFPAQABD9r/3qzg//5oGQEf8QEAATcAAAC1/P/89AEfAxYV+f0J2wEA/dj/Af39Av8GJBAAA4X3APS++QEEl/7/AfAJAvZw+f8UTv3/+3wBAfe+AQAGFf7/ADEWAv41ABwFEyv///8A////ADodEAEwEwAI////AP///wAbAByWGwAajv///wD///8A////AP///wD///8A////AC4HCwwB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIVxVaAvM8fUAAAAAElFTkSuQmCC' },
    ],

  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/main.css',
    '~assets/fonts.css'




  ],
  cache: false,

  axios: {
    //origin:'https://startup-clan.ru',
    baseURL: '/v1/',
    proxyHeaders: false,
    credentials: true,
    debug:false,
    cookieEnabled:true,
    retry: { retries: 3 }

  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/vue-modal.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/device'],
   // ['nuxt-session', { alias: 'nsession' }],
    ['cookie-universal-nuxt', { alias: 'cookies' }],


  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vue-native-websocket'],

    postcss: {
      plugins: {
        // Disable `postcss-url`


        'postcss-url': false,
        // Add some plugins
        'postcss-nested': {}
        /*   'postcss-responsive-type': {},*/

      },
      preset: {
        autoprefixer: {

             grid: true,
          //     browsers: ['ie >= 10']
        }
      }
    },

      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      },


    extend (config, { isDev, isClient }) {
      config.node = {

        fs: "empty",
        uws: "empty"

      };
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          //loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
