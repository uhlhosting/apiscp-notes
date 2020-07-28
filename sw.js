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
    "url": "webpack-runtime-8de0ae948ed94940f72b.js"
  },
  {
    "url": "framework-9fe058f4359556db0d38.js"
  },
  {
    "url": "d57d79ab-4243d0eccb30f9bc167f.js"
  },
  {
    "url": "c322df3a-ced6e0ccc9168bbf79e6.js"
  },
  {
    "url": "ff39441c-1e7d0a230315c3c69501.js"
  },
  {
    "url": "29107295-5b821f61adc8ad7cca20.js"
  },
  {
    "url": "1bfc9850-f297dd4d176532a1baa1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6a3e1ab6ae760ed6e0f14b7dd47580ba"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-3ecdc9640efe42acf30e.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-a1db964a34932b9ca4d3.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-8591f6d4154a6c6acbc0.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "9f7e23dffed634bade188874f7c02852"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "3264f06ab4baf98924425a6348b656e6"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "097a0308fc1b1a1fc37e774650450f9f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-283f4fe298b1ec725286.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "016ae8706699e42295073e878dd8280b"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "872225e09f61ecd5caa456de3dc93bfe"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "937a692a4432fdf8a1eff260f931b0f0"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-d0ca65d67679da87953b.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "6cbb72dca2d12aa71e7f94844e0bb69e"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "b12516806e4906dbebed2a2e15ea876e"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "c56f34bac7d2bfb18f6b74a8338de252"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "526d35d6b41e35963ffb7ab922d48405"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "8c5821585049cd6cb39a5c47d39e8e54"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "ccc6af540937d14514ce8731e3396983"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "8dc69c9420adede9b67d42d7f04f6db4"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-91033ac48f0ff912f6e9.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "0de5cdf761d99fd806b19d0b7fada6d6"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "72061619b3888135cdc6a5ffb2d92e31"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "9411af50c011ddcc116a3158c3449bad"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "3cd754c1cc30f28c0841de469d273c8d"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "3607c9c95a8d70001e48a41b548a5826"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "dbd95aa2695c6d263dda68650d05dc0c"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "740f80c17abc64733187dabf7a28a028"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "d8281623bf226c3cd3d82e2f55dddfed"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "1f4fc8ceb370bab6e7eb3b3817f50700"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "238dd5cf826b584baf4497262a3473ea"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "82fe58ad14fd9f3eb1824e59030fdd4d"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "f8023420e44d965f4993412e8390f634"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "b311f01f3091461b69dfe41022a69607"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "bcc381918458d432a76f17b3b6cee95f"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "40ff87b13949faa12bd54821cd9155ec"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "d37d81f0e9cdc5130b641a4d77a865da"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "48c65dca13eb70df4ea5a1a0c11d9a20"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c39589082ec4e4d67e111ab897bffb65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

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
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-efa6153994fa903d1985.js`))) {
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

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
