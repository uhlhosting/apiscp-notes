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
    "url": "webpack-runtime-d4aa3beac6b95f5690fc.js"
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
    "url": "app-b40a4146102983146408.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "02570b1d3ebb72a683efdd02f4ce09a1"
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
    "revision": "f873f65c9d40b2d5e2f4a724f8c8587b"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-8fe38229a9a2dec0d3df.js"
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
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-791afeae18a12a5318d4.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "17a8ba58e0a57f05ad3bca72df17d39b"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "771e31bf6d4fdd2d22acf5e5dfdd7ad5"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b3520037b68af7768459.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "214962e40b654e5dbbdb9897f56a96fe"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "d15b036e4219060283ae4fc2b1bd2fdb"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "f7b3a0ca95571619656396a94feb4e7f"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "70cb5b529ffe85d33293ea9680d37a8c"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "9453eb1ab82f4eb7814642be633db708"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-75fe09e4bcc3843df529.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "c6cc4a73fd753f7d4ed84b3b132b2bd9"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "7146732b16360b8d056475d1918c17d8"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "6901271159b55977569ac157830953d5"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "51f12361d475824412b29121a9a74e9c"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "8f4bdf1d64f058884845e7f75ff0d4ba"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "22e2cfb39eaf81261e2f86c13a864fd4"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "f88fb048a2fc427613b23e51a30d99ce"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "fc8e6729795330d38c33dc0f18cafaba"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "8bd6e9d92b494e99448b531662b50db6"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "5d1147300d10ae7906e045a4dbbfbd23"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "01196359e293f19a8316a91c43132144"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "17f909fc385ab14749b6debd8a14d905"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "b88a7fd617a84898e5ce3b16d1133ad7"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "b0c9a3a2ca416a08e95c1ba63c844e66"
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
  if (!resources || !(await caches.match(`/apiscp-notes/app-b40a4146102983146408.js`))) {
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
