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
    "url": "webpack-runtime-46678df651e286a41c80.js"
  },
  {
    "url": "framework-5ac5fe15e446442d2191.js"
  },
  {
    "url": "d57d79ab-23a1ec8ab763ae01d490.js"
  },
  {
    "url": "c322df3a-5f632ef7941949fb2955.js"
  },
  {
    "url": "ff39441c-bc9d3b40941c8833a14f.js"
  },
  {
    "url": "1bfc9850-6d3c4bc9bc5a0bcc4bb2.js"
  },
  {
    "url": "29107295-ae5053c355cedfa6cf61.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4491aa7ba72b1374a71f5dac0c9980d1"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e8e7fbb006d57d32ed40.js"
  },
  {
    "url": "polyfill-c7657d5a7354cc137327.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-b049269422541e408c2f.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-f207f2df0df27f9819b9.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "e0cffb9efa008148eb43d5a0ca14720a"
  },
  {
    "url": "static/d/1437003973.json"
  },
  {
    "url": "static/d/2744905544.json"
  },
  {
    "url": "static/d/3664657028.json"
  },
  {
    "url": "static/d/467212769.json"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "b06c54bf71f979f65c4f1e98711c57f6"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2bee3dd8ea505b31a38506c5052e0e90"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-2468805542e9f1379586.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "74de15dc30ddd1a36d730ba257c3ae2e"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "533aeeb69042ed7aeb60ae35afc7db7c"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "0a0d59049e78d12391a8d874389d0a39"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-c95dfb19c411084cf8ea.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "726a624bec5cdebd919b253dafa5081b"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "7af3ec13707656eed25123cd01e77d8b"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "c7173b7a796065d3ea92ea30440acba9"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "5700ab6cb247f6a5f4a9f453774da00a"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "2f2f9035f33fdec2846220ded0808d3a"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "de6f60289194c4cc9cf082e3b23057b0"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "2e05b54b0dff00a86e5f719f57881d60"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-6d70bdab74e3e84d2adb.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "abf4292f552161d8312374ee4301adf6"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "2786a91c7759a755bd6c976dfb248381"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "905a69d230f603012d4ebc6b6b80c400"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "de7d8ae62a077e658ad2c3be8e2c0b05"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "248dc57615090cb49f2d7e36ea741731"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "19705edec1d2ca78734d9bf68daccd06"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "8b415209bdb1e2d3150a8600334892b0"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "ecaf2eb4fc4d36bddbe2c448ab1e0fc4"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "ee43ba70485cbe813ed9f2c9d4220449"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "1864382f9f1d8116542d210b1db7694d"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "287ecfd26f3e9888a1466e21dda698ad"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "7f8e0ac33f2b34aaca7a63353537979d"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "b9feae4ca459b795a43a4b1147889f17"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "48147e98242e315d59362a635c4bbf77"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "54812c11d51069a0848565e5ef644785"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "84e06336663bafce6c2021f2744e03b8"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "03350cb1900190eb98f3f7ee49c2d84b"
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
  if (!resources || !(await caches.match(`/app-c00dee8351b89bacf9dd.js`))) {
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
