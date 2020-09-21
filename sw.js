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
    "url": "webpack-runtime-87f76ea735d6a17d9001.js"
  },
  {
    "url": "framework-4f7388a1aba29813794a.js"
  },
  {
    "url": "d57d79ab-642b7b7900e7a64c1326.js"
  },
  {
    "url": "c322df3a-97400b27e541dd22d873.js"
  },
  {
    "url": "ff39441c-00b3eaf0c8225ed1b373.js"
  },
  {
    "url": "7b7ac2bb-aeb8e4323be1e136095c.js"
  },
  {
    "url": "app-4203684c94e98bfcb03c.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "42935017eee14236396708e413fcd730"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-3ecdc9640efe42acf30e.js"
  },
  {
    "url": "polyfill-fe0721619ea5f6cf52ab.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-95b457c284bb8fe1b46b.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-8591f6d4154a6c6acbc0.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "e0cffb9efa008148eb43d5a0ca14720a"
  },
  {
    "url": "page-data/sq/d/1437003973.json",
    "revision": "8f54787d57389379d7e636a1982e952a"
  },
  {
    "url": "page-data/sq/d/2744905544.json",
    "revision": "6fded333b4ed834f59ae5dc670f8d388"
  },
  {
    "url": "page-data/sq/d/3664657028.json",
    "revision": "c0a22cfc57ceb5071c1914b150be4ccf"
  },
  {
    "url": "page-data/sq/d/467212769.json",
    "revision": "917ea62291403a81f4a9ab1b8e2afb36"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "65a7551ce90751101818a652da6c439d"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2bee3dd8ea505b31a38506c5052e0e90"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-c60d7a569e64dcd6de7b.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "2cc94e412d9422845c471cd4c461a87c"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "08724f7df36ce753a328ef84a0dce7f6"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "5195d6de8b37a80092cac63dbb73bc82"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "4f5e09fc1504ad4e962884cc873f13a5"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "691fd7c55348ed72924b881adde02aee"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "e33546f51d216a66e188728b52a3608f"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "fe2187fcbcb826fe10eab1afb36808bf"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "9d8e507d3365991a85ac88d75ac702df"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "f0a984d072489137072faaef2bd3acaa"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "5bc3375f3b69ea24206f11b8f1a6e9b6"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "7f3bc48a3e9be45e8af8f3f58d70832a"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "dd87b325b48b6fa49af006c2f00135c7"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "8ad52e7e95a895709bd1bcfec56cdcbe"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "47ba074de20a18b6fd10aff08defe573"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "23f76046eb9e6ae3675b0e0267c1561d"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "7b9cf8b7cebeff431a096e7c7c93c9c5"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "fa5838f5691137c343d928a9565dd53b"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "b329c4c20611c988c3d1ee2025226df0"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "4ce1332947d034c2a3ca04f27591041a"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "94c763c683b37cd3bb38cad5297b772a"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "bdc3a7d123e06c7df3a2241004259b78"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "6bb109d83da9963f8af281b4084b36bb"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "4922be3dedc5f051feb398c2612b6076"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "2e877fbabf320d341f3771cec6a01038"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "7fc9531aa41aa1a23ba50f5375b6d855"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "43aadd2bdca00b6274ae2a59c335ddbd"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "16b2d9b6bd1a32637014c77b9dda8cb0"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "3f3e239ae5a75f72ba07dbada90b692e"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "0868128d97455d55f571e53421efcd3d"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c39589082ec4e4d67e111ab897bffb65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-4203684c94e98bfcb03c.js`))) {
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
