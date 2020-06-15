/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-327d596c07e5d2b49f56.js"
  },
  {
    "url": "framework-20335242239071f73386.js"
  },
  {
    "url": "29107295-9ea4360ea8ec8d33e511.js"
  },
  {
    "url": "1bfc9850-f297dd4d176532a1baa1.js"
  },
  {
    "url": "app-a786352175c9b512af06.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "aad31d885ea751d956af70bf79831585"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-06e676c3cd7b78941a0b.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "0b91c994c36fe81dbf3a9f685d003b25"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-61425bf10ff194f33751.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-cca164f851d04e0d9e05.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "9f7e23dffed634bade188874f7c02852"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "097a0308fc1b1a1fc37e774650450f9f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-f80ebd36d827eeda99a6.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "4487ad61ad10574877e1eea6704255da"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "1e715e1ede5e85b15cf55182d5bd529b"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b3520037b68af7768459.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "be527b325ec9f66f54db654897265315"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "2d48eed21fa707dfaedee4874ab8c83d"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "cff1e079fdf1ff19531f3feb1750e67a"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "2dd9270664dc527ea36f45fa7ea59e68"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "b051389c2492b364e09fa1e0f22fa0b5"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-75fe09e4bcc3843df529.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "d9ddecccbb244629cb5d998db1c32ba3"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "b94751dac65539ac848ac5ae537c1449"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "2928f69e4f604e2bd8aef67665dc4357"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "300d20e926fc60caaee18a7f1be63761"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "86756bbc8ea8d113161f8d571acad188"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "5d826daf47bb98f9992bc6a9c2ffb124"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "3e1cb88f4bf94c87d475a41c1cef1a74"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "778df77d660ca8a2a5660050a6b8e0b3"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "8688db060b17d4466bc03157fbcb7e4e"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "6625a45b3c686ca71ca43b1470288d3e"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "c85d487f4516414ecdfaf6ce02fc0966"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "33be37d80d8b5b97046ef7b722d22bde"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "aabfc7b7f25de893a4fc26b1fafa2243"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "2c613350637110d4068e34967b98188f"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "41061610b5e94ca529cf842700bd64cc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/apiscp-notes`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/apiscp-notes/app-a786352175c9b512af06.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/apiscp-notes/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
