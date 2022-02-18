export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"],
      },
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-fontawesome",
    //OR like this
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          //import whole set
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
        ],
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
